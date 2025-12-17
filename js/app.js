// --- CONFIGURATION & ASSETS ---
const ASSETS = {
    icons: {
        town: "img/Town.webp",
        boss: "img/boss.webp",
        wp: "img/Waypoint.webp",
        npc: "img/NPC.webp",
        exit: "img/Entrance.webp",
        item: "img/QuestItem.webp",
        util: "img/GenericUtilityIcon.webp",
        quest: "img/QuestItem.webp"
    },
    dmg: {
        fire: "img/fire.webp",
        cold: "img/cold.webp",
        light: "img/light.webp",
        chaos: "img/chaos.webp",
        phys: "img/phys.webp"
    }
};

// --- STATE MANAGEMENT ---
const state = {
    progress: JSON.parse(localStorage.getItem('poe2_progress')) || {},
    settings: {
        hideCompleted: JSON.parse(localStorage.getItem('poe2_hide')) || false,
        mode: localStorage.getItem('poe2_mode') || 'explorer',
        theme: localStorage.getItem('poe2_theme') || 'dark',
        timerEnabled: JSON.parse(localStorage.getItem('poe2_timer_enabled')) || false
    },
    timer: {
        startTime: null,
        elapsed: 0,
        interval: null,
        running: false
    }
};

// --- DOM ELEMENTS ---
const dom = {
    app: document.getElementById('app-container'),
    search: document.getElementById('search'),
    progressFill: document.getElementById('progress-fill'),
    modeToggle: document.getElementById('mode-toggle'),
    modeLabel: document.getElementById('mode-label'),
    timerDisplay: document.getElementById('speedrun-timer'),
    timerVal: document.getElementById('timer-val'),
    timerBtn: document.getElementById('timer-toggle'),
    timerReset: document.getElementById('timer-reset'),
    timerCheck: document.getElementById('timer-check'),
    hideCheck: document.getElementById('hide-check'),
    themeIcon: document.getElementById('theme-icon'),
    settingsMenu: document.getElementById('settings-menu'),
    backToTop: document.getElementById('back-to-top'),
    statPassives: document.getElementById('stat-passives'),
    statSpirit: document.getElementById('stat-spirit'),
    statRes: document.getElementById('stat-res'),
    infoModal: document.getElementById('info-modal'),
    endgameModal: document.getElementById('endgame-modal'),
    finalTime: document.getElementById('final-time')
};

// --- INITIALIZATION ---
const app = {
    init: () => {
        document.documentElement.setAttribute('data-theme', state.settings.theme);
        dom.themeIcon.textContent = state.settings.theme === 'dark' ? '☀' : '☾';

        dom.hideCheck.textContent = state.settings.hideCompleted ? '☑' : '☐';
        dom.timerCheck.textContent = state.settings.timerEnabled ? '☑' : '☐';
        dom.modeToggle.checked = state.settings.mode === 'speedrun';
        app.updateModeLabel();

        if (state.settings.timerEnabled) dom.timerDisplay.classList.remove('hidden');
        const savedTime = localStorage.getItem('poe2_timer_elapsed');
        if (savedTime) {
            state.timer.elapsed = parseInt(savedTime);
            app.updateTimerDisplay();
        }

        dom.modeToggle.addEventListener('change', app.toggleMode);
        dom.timerBtn.addEventListener('click', app.toggleTimerRun);
        dom.timerReset.addEventListener('click', app.resetTimer);
        window.addEventListener('scroll', app.handleScroll);
        
        // --- MENU LOGIC (FIXED) ---
        const settingsBtn = document.querySelector('.settings-btn');
        const menu = document.getElementById('settings-menu');

        // Toggle on click (Works for both PC Click and Mobile Tap)
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('show');
        });

        // Close when clicking anywhere else
        document.addEventListener('click', (e) => {
            // If click is NOT on the button AND NOT inside the menu
            if (!settingsBtn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
        
        app.render();
    },

    // --- RENDER ENGINE ---
    render: () => {
        dom.app.innerHTML = '';
        const isSpeedrun = state.settings.mode === 'speedrun';
        const canHover = window.matchMedia('(hover: hover)').matches;

        DB.forEach((act, aIdx) => {
            const actHeader = document.createElement('div');
            actHeader.className = 'act-header-container';

            const actTitle = document.createElement('div');
            actTitle.className = 'act-title';
            const levelInfo = act.levels ? `<span class="act-levels">Lvl ${act.levels}</span>` : '';
            actTitle.innerHTML = `${act.act} ${levelInfo}`;

            const actCheckBtn = document.createElement('button');
            actCheckBtn.className = 'act-check-btn';
            actCheckBtn.textContent = '✓ All Act';
            actCheckBtn.onclick = () => app.toggleAct(aIdx);

            actHeader.appendChild(actTitle);
            actHeader.appendChild(actCheckBtn);
            dom.app.appendChild(actHeader);

            act.zones.forEach((zone, zIdx) => {
                const card = document.createElement('div');
                card.className = `zone-card ${zone.type}`;
                
                const header = document.createElement('div');
                header.className = 'zone-header';
                
                const left = document.createElement('div');
                left.className = 'zone-left';
                
                const icon = document.createElement('img');
                icon.src = ASSETS.icons[zone.icon] || ASSETS.icons.exit;
                icon.className = 'zone-icon';
                
                const name = document.createElement('div');
                name.className = 'zone-name';
                name.textContent = zone.name;

                left.appendChild(icon);
                left.appendChild(name);

                if (zone.layout) {
                    const compassBtn = document.createElement('button');
                    compassBtn.className = 'layout-btn';
                    compassBtn.innerHTML = '🧭';
                    compassBtn.title = "Show Layout Guide";
                    
                    if (canHover) {
                        compassBtn.onmouseenter = () => {
                            const tooltip = card.querySelector('.layout-tooltip');
                            if (!tooltip.classList.contains('locked')) tooltip.classList.add('show');
                        };
                        compassBtn.onmouseleave = () => {
                            const tooltip = card.querySelector('.layout-tooltip');
                            if (!tooltip.classList.contains('locked')) tooltip.classList.remove('show');
                        };
                    }

                    compassBtn.onclick = (e) => {
                        e.stopPropagation();
                        const tooltip = card.querySelector('.layout-tooltip');
                        if (tooltip.classList.contains('show') && tooltip.classList.contains('locked')) {
                            tooltip.classList.remove('show');
                            tooltip.classList.remove('locked');
                        } else {
                            tooltip.classList.add('show');
                            tooltip.classList.add('locked');
                        }
                    };
                    left.appendChild(compassBtn);
                }

                header.appendChild(left);

                const checkAll = document.createElement('button');
                checkAll.className = 'check-all-btn';
                checkAll.textContent = '✓ All';
                checkAll.onclick = (e) => {
                    e.stopPropagation();
                    app.toggleZone(aIdx, zIdx);
                };
                header.appendChild(checkAll);
                card.appendChild(header);

                if (zone.layout) {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'layout-tooltip';
                    const confidenceClass = zone.layout.confidence === 'Very High' || zone.layout.confidence === 'High' ? 'conf-high' : 'conf-low';
                    let layoutText = isSpeedrun && zone.layout.speedrun ? zone.layout.speedrun : zone.layout.text;
                    tooltip.innerHTML = `<span class="confidence-tag ${confidenceClass}">Confidence: ${zone.layout.confidence}</span><p>${layoutText}</p>`;
                    card.appendChild(tooltip);
                }

                const content = document.createElement('div');
                let visibleTasks = 0;

                zone.steps.forEach((step, sIdx) => {
                    const stepId = step.id || `${aIdx}-${zIdx}-${sIdx}`;
                    const isDone = state.progress[stepId];

                    if (state.settings.hideCompleted && isDone) return;
                    if (isSpeedrun && step.opt && !step.perm) return;

                    visibleTasks++;

                    const row = document.createElement('div');
                    row.className = `task-row ${isDone ? 'completed' : ''} ${zone.sub ? 'sub-zone' : ''}`;
                    
                    row.onclick = (e) => {
                        if(e.target.closest('.boss-tactics-btn')) return;
                        app.toggleStep(stepId);
                    };

                    const taskIcon = document.createElement('img');
                    taskIcon.src = ASSETS.icons[step.icon] || ASSETS.icons.quest;
                    taskIcon.className = 'task-icon-img';

                    const info = document.createElement('div');
                    info.className = 'task-content';
                    
                    let badges = '';
                    if (step.opt) badges += `<span class="badge badge-opt">OPT</span>`;
                    if (step.perm) badges += `<span class="badge badge-perm">PERM</span>`;
                    if (step.bossData) badges += `<span class="badge badge-boss">BOSS</span>`;

                    let html = `<div class="task-text">${badges} ${app.processText(step.text)}</div>`;
                    if (step.note) html += `<div class="task-note">${app.processText(step.note)}</div>`;
                    
                    if (step.bossData) {
                        html += `<button class="boss-tactics-btn" onclick="app.toggleBossCard(this)">Tactics</button>`;
                    }

                    info.innerHTML = html;

                    const check = document.createElement('div');
                    check.className = 'checkbox';

                    row.appendChild(taskIcon);
                    row.appendChild(info);
                    row.appendChild(check);
                    content.appendChild(row);

                    if (step.bossData) {
                        const bossCard = document.createElement('div');
                        bossCard.className = 'boss-card';
                        let dmgHtml = '<div class="dmg-icons">';
                        if (step.bossData.dmg) {
                            step.bossData.dmg.forEach(type => {
                                dmgHtml += `<img src="${ASSETS.dmg[type]}" title="${type}" style="width:20px; height:20px;">`;
                            });
                        }
                        dmgHtml += '</div>';
                        let tipsHtml = '<ul class="boss-tip-list">';
                        step.bossData.tips.forEach(tip => {
                            tipsHtml += `<li>${tip}</li>`;
                        });
                        tipsHtml += '</ul>';
                        bossCard.innerHTML = dmgHtml + tipsHtml;
                        content.appendChild(bossCard);
                    }
                });

                if (visibleTasks > 0 || !state.settings.hideCompleted) {
                    card.appendChild(content);
                    dom.app.appendChild(card);
                }
            });
        });
        app.updateProgress();
        app.calculateStats();
    },

    // --- LOGIC ---
    toggleStep: (id) => {
        if (state.progress[id]) delete state.progress[id];
        else {
            state.progress[id] = true;
            if (id === 'a1-z1-boss' && !state.timer.running && state.timer.elapsed === 0 && state.settings.timerEnabled) {
                app.toggleTimerRun();
            }
            if (id === 'int-final-reward' && state.timer.running) {
                app.toggleTimerRun();
                app.showEndgame();
            }
        }
        app.save();
        app.render();
    },

    toggleZone: (aIdx, zIdx) => {
        const zone = DB[aIdx].zones[zIdx];
        const steps = zone.steps;
        const allDone = steps.every(s => state.progress[s.id || `${aIdx}-${zIdx}-${DB[aIdx].zones[zIdx].steps.indexOf(s)}`]);
        
        steps.forEach((s, sIdx) => {
            const id = s.id || `${aIdx}-${zIdx}-${sIdx}`;
            if (allDone) delete state.progress[id];
            else state.progress[id] = true;
        });
        app.save();
        app.render();
    },

    toggleAct: (aIdx) => {
        const act = DB[aIdx];
        let allDone = true;
        act.zones.forEach((zone, zIdx) => {
            zone.steps.forEach((step, sIdx) => {
                const id = step.id || `${aIdx}-${zIdx}-${sIdx}`;
                if (!state.progress[id]) allDone = false;
            });
        });

        act.zones.forEach((zone, zIdx) => {
            zone.steps.forEach((step, sIdx) => {
                const id = step.id || `${aIdx}-${zIdx}-${sIdx}`;
                if (allDone) delete state.progress[id];
                else state.progress[id] = true;
            });
        });
        app.save();
        app.render();
    },

    toggleBossCard: (btn) => {
        const row = btn.closest('.task-row');
        const card = row.nextElementSibling; 
        if (card && card.classList.contains('boss-card')) {
            card.classList.toggle('show');
        }
    },

    processText: (text) => {
        return text.replace(/\b(Waypoint)\b/g, '<span style="color:var(--c-blue)">Waypoint</span>')
                   .replace(/\b(Passive Points)\b/g, '<span style="color:var(--c-gold)">Passive Points</span>');
    },

    updateProgress: () => {
        let total = 0, completed = 0;
        DB.forEach((act, aIdx) => {
            act.zones.forEach((zone, zIdx) => {
                zone.steps.forEach((step, sIdx) => {
                    total++;
                    if (state.progress[step.id || `${aIdx}-${zIdx}-${sIdx}`]) completed++;
                });
            });
        });
        const pct = total === 0 ? 0 : (completed / total) * 100;
        dom.progressFill.style.width = `${pct}%`;
    },

    calculateStats: () => {
        let passives = 0;
        let spirit = 0;
        let resPenalty = 0;
        const actBossIds = ["a1-z16-boss2", "a2-z16-boss", "a3-z17-boss", "a4-z15-boss"];

        DB.forEach((act, aIdx) => {
            act.zones.forEach((zone, zIdx) => {
                zone.steps.forEach((step, sIdx) => {
                    const id = step.id || `${aIdx}-${zIdx}-${sIdx}`;
                    const isDone = state.progress[id];
                    
                    if (isDone) {
                        const fullText = (step.text + " " + (step.note || "")).toLowerCase();
                        if (fullText.includes("passive point") || fullText.includes("passive skill")) passives += 2;
                        if (fullText.includes("spirit")) {
                            if (fullText.includes("30")) spirit += 30;
                            if (fullText.includes("40")) spirit += 40;
                        }
                        if (actBossIds.includes(id)) resPenalty -= 10;
                    }
                });
            });
        });

        dom.statPassives.textContent = `${passives}/24`;
        dom.statSpirit.textContent = `${spirit}/100`;
        dom.statRes.textContent = `${resPenalty}%`;
    },

    toggleMenu: () => {
        // Handled by event listeners
    },
    
    toggleInfoModal: () => dom.infoModal.classList.toggle('hidden'),
    
    showEndgame: () => {
        dom.finalTime.textContent = dom.timerVal.textContent;
        dom.endgameModal.classList.remove('hidden');
    },
    closeEndgame: () => dom.endgameModal.classList.add('hidden'),
    
    toggleTheme: () => {
        state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('poe2_theme', state.settings.theme);
        app.init();
    },

    toggleMode: () => {
        state.settings.mode = dom.modeToggle.checked ? 'speedrun' : 'explorer';
        localStorage.setItem('poe2_mode', state.settings.mode);
        app.updateModeLabel();
        app.render();
    },

    updateModeLabel: () => {
        dom.modeLabel.textContent = state.settings.mode === 'speedrun' ? 'Speedrun' : 'Explorer';
        dom.modeLabel.style.color = state.settings.mode === 'speedrun' ? 'var(--c-green)' : 'var(--c-gold)';
    },

    toggleHideCompleted: () => {
        state.settings.hideCompleted = !state.settings.hideCompleted;
        localStorage.setItem('poe2_hide', state.settings.hideCompleted);
        dom.hideCheck.textContent = state.settings.hideCompleted ? '☑' : '☐';
        app.render();
    },

    toggleTimer: () => {
        state.settings.timerEnabled = !state.settings.timerEnabled;
        localStorage.setItem('poe2_timer_enabled', state.settings.timerEnabled);
        dom.timerCheck.textContent = state.settings.timerEnabled ? '☑' : '☐';
        dom.timerDisplay.classList.toggle('hidden');
    },

    toggleTimerRun: () => {
        if (state.timer.running) {
            clearInterval(state.timer.interval);
            state.timer.running = false;
            dom.timerBtn.textContent = '▶';
        } else {
            state.timer.startTime = Date.now() - state.timer.elapsed;
            state.timer.interval = setInterval(() => {
                state.timer.elapsed = Date.now() - state.timer.startTime;
                app.updateTimerDisplay();
                localStorage.setItem('poe2_timer_elapsed', state.timer.elapsed);
            }, 1000);
            state.timer.running = true;
            dom.timerBtn.textContent = '⏸';
        }
    },

    resetTimer: () => {
        if(confirm("Reset timer?")) {
            clearInterval(state.timer.interval);
            state.timer.running = false;
            state.timer.elapsed = 0;
            state.timer.startTime = null;
            localStorage.removeItem('poe2_timer_elapsed');
            app.updateTimerDisplay();
            dom.timerBtn.textContent = '▶';
        }
    },

    updateTimerDisplay: () => {
        const totalSeconds = Math.floor(state.timer.elapsed / 1000);
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        dom.timerVal.textContent = `${h}:${m}:${s}`;
    },

    save: () => localStorage.setItem('poe2_progress', JSON.stringify(state.progress)),
    
    resetProgress: () => {
        if(confirm("Reset all progress?")) {
            state.progress = {};
            state.timer.elapsed = 0;
            localStorage.removeItem('poe2_timer_elapsed');
            app.updateTimerDisplay();
            app.save();
            app.render();
        }
    },

    exportData: () => {
        const data = { progress: state.progress, timer: state.timer.elapsed };
        const blob = new Blob([JSON.stringify(data)], {type: "application/json"});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "poe2_save.json";
        a.click();
    },

    importData: () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = e => {
            const reader = new FileReader();
            reader.onload = ev => {
                try {
                    const data = JSON.parse(ev.target.result);
                    state.progress = data.progress || {};
                    if (data.timer) state.timer.elapsed = data.timer;
                    app.save();
                    app.render();
                    app.updateTimerDisplay();
                } catch(err) { alert("Invalid file"); }
            };
            reader.readAsText(e.target.files[0]);
        };
        input.click();
    },

    handleScroll: () => {
        if (window.scrollY > 300) dom.backToTop.style.display = 'block';
        else dom.backToTop.style.display = 'none';
    },

    filterSearch: () => {
        const term = dom.search.value.toLowerCase();
        const rows = document.querySelectorAll('.task-row');
        let firstMatch = null;

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            if (text.includes(term)) {
                row.style.display = 'flex';
                if (!firstMatch) firstMatch = row;
            } else {
                row.style.display = 'none';
            }
        });

        if (firstMatch && term.length > 2) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);
