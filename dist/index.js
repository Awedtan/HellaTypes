"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorIO = exports.StageIO = exports.SkinIO = exports.SkillIO = exports.SandboxActIO = exports.RogueThemeIO = exports.ParadoxIO = exports.ModuleIO = exports.ItemIO = exports.GameEventIO = exports.EnemyIO = exports.DefinitionIO = exports.CCStageIO = exports.BaseIO = exports.SandboxStageIO = exports.RogueVariationIO = exports.RogueStageIO = exports.RogueRelicIO = exports.StageDataIO = exports.StageEffectIO = exports.StageDefinesIO = exports.LevelUpCostCondIO = exports.OperatorUnlockCondIO = exports.WorkshopFormulaIO = exports.ManufactFormulaIO = exports.LevelUpCostIO = exports.GridRangeIO = exports.EnemySpDataIO = exports.EnemySkillsIO = exports.EnemyAttributesIO = exports.BlackboardIO = exports.AttributesKeyFrameIO = void 0;
var t = require("io-ts");
exports.AttributesKeyFrameIO = t.type({
    level: t.number,
    data: t.type({
        maxHp: t.number,
        atk: t.number,
        def: t.number,
        magicResistance: t.number,
        cost: t.number,
        blockCnt: t.number,
        moveSpeed: t.number,
        attackSpeed: t.number,
        baseAttackTime: t.number,
        respawnTime: t.number,
        hpRecoveryPerSec: t.number,
        spRecoveryPerSec: t.number,
        maxDeployCount: t.number,
        maxDeckStackCnt: t.number,
        tauntLevel: t.number,
        massLevel: t.number,
        baseForceLevel: t.number,
        stunImmune: t.boolean,
        silenceImmune: t.boolean,
        sleepImmune: t.boolean,
        frozenImmune: t.boolean,
        levitateImmune: t.boolean,
    }),
});
exports.BlackboardIO = t.type({
    key: t.string,
    value: t.union([t.number, t.undefined]),
    valueStr: t.union([t.string, t.undefined]),
});
exports.EnemyAttributesIO = t.type({
    maxHp: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    atk: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    def: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    magicResistance: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    cost: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    blockCnt: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    moveSpeed: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    attackSpeed: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    baseAttackTime: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    respawnTime: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    hpRecoveryPerSec: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    spRecoveryPerSec: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    maxDeployCount: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    massLevel: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    baseForceLevel: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    tauntLevel: t.type({
        m_defined: t.boolean,
        m_value: t.number,
    }),
    stunImmune: t.type({
        m_defined: t.boolean,
        m_value: t.boolean,
    }),
    silenceImmune: t.type({
        m_defined: t.boolean,
        m_value: t.boolean,
    }),
    sleepImmune: t.type({
        m_defined: t.boolean,
        m_value: t.boolean,
    }),
    frozenImmune: t.type({
        m_defined: t.boolean,
        m_value: t.boolean,
    }),
    levitateImmune: t.type({
        m_defined: t.boolean,
        m_value: t.boolean,
    }),
});
exports.EnemySkillsIO = t.type({
    prefabKey: t.string,
    priority: t.number,
    cooldown: t.number,
    initCooldown: t.number,
    spCost: t.number,
    blackboard: t.array(exports.BlackboardIO),
});
exports.EnemySpDataIO = t.type({
    spType: t.number,
    maxSp: t.number,
    initSp: t.number,
    increment: t.number,
});
exports.GridRangeIO = t.type({
    id: t.string,
    direction: t.number,
    grids: t.array(t.type({
        row: t.number,
        col: t.number,
    })),
});
exports.LevelUpCostIO = t.type({
    id: t.string,
    count: t.number,
    type: t.string,
});
exports.ManufactFormulaIO = t.type({
    formulaId: t.string,
    itemId: t.string,
    count: t.number,
    weight: t.number,
    costPoint: t.number,
    formulaType: t.string,
    buffType: t.string,
    costs: t.array(exports.LevelUpCostIO),
    requireRooms: t.array(t.type({
        roomId: t.string,
        roomLevel: t.number,
        roomCount: t.number,
    })),
    requireStages: t.array(t.type({
        stageId: t.string,
        rank: t.number,
    })),
});
exports.WorkshopFormulaIO = t.type({
    sortId: t.number,
    formulaId: t.string,
    rarity: t.number,
    itemId: t.string,
    count: t.number,
    goldCost: t.number,
    apCost: t.number,
    formulaType: t.string,
    buffType: t.string,
    extraOutcomeRate: t.number,
    extraOutcomeGroup: t.array(t.type({
        weight: t.number,
        itemId: t.string,
        itemCount: t.number,
    })),
    costs: t.array(exports.LevelUpCostIO),
    requireRooms: t.array(t.type({
        roomId: t.string,
        roomLevel: t.number,
        roomCount: t.number,
    })),
    requireStages: t.array(t.type({
        stageId: t.string,
        rank: t.number,
    })),
});
exports.OperatorUnlockCondIO = t.type({
    phase: t.string,
    level: t.number,
});
exports.LevelUpCostCondIO = t.type({
    unlockCond: exports.OperatorUnlockCondIO,
    lvlUpTime: t.number,
    levelUpCost: t.array(exports.LevelUpCostIO),
});
exports.StageDefinesIO = t.type({
    characterInsts: t.array(t.any),
    tokenInsts: t.array(t.type({
        position: t.type({
            row: t.number,
            col: t.number,
        }),
        direction: t.number,
        hidden: t.boolean,
        alias: t.string,
        uniEquipIds: t.array(t.type({
            key: t.string,
            level: t.number,
        })),
        inst: t.type({
            characterKey: t.string,
            level: t.number,
            phase: t.number,
            favorPoint: t.number,
            potentialRank: t.number,
        }),
        skillIndex: t.number,
        mainSkillLvl: t.number,
        skinId: t.string,
        tmplId: t.string,
        overrideSkillBlackboard: t.array(exports.BlackboardIO),
    })),
    characterCards: t.array(t.any),
    tokenCards: t.array(t.any),
});
exports.StageEffectIO = t.type({
    key: t.string,
    offset: t.type({
        x: t.number,
        y: t.number,
        z: t.number,
    }),
    direction: t.number,
});
exports.StageDataIO = t.type({
    options: t.type({
        characterLimit: t.number,
        maxLifePoint: t.number,
        initialCost: t.number,
        maxCost: t.number,
        costIncreaseTime: t.number,
        moveMultiplier: t.number,
        steeringEnabled: t.boolean,
        isTrainingLevel: t.boolean,
        isHardTrainingLevel: t.boolean,
        functionDisableMask: t.number,
    }),
    levelId: t.string,
    mapId: t.string,
    bgmEvent: t.string,
    environmentSe: t.string,
    mapData: t.type({
        map: t.array(t.array(t.number)),
        tiles: t.array(t.type({
            tileKey: t.string,
            heightType: t.number,
            buildableType: t.number,
            passableMask: t.number,
            playerSideMask: t.number,
            blackboard: exports.BlackboardIO,
            effects: t.array(exports.StageEffectIO),
        })),
        blockEdges: t.null,
        tags: t.array(t.string),
        effects: t.array(exports.StageEffectIO),
        layerRects: t.array(t.string),
        width: t.number,
        height: t.number,
    }),
    tilesDisallowToLocate: t.array(t.any),
    runes: t.array(t.type({
        difficultyMask: t.number,
        key: t.string,
        professionMask: t.number,
        buildableMask: t.number,
        blackboard: t.array(exports.BlackboardIO),
    })),
    globalBuffs: t.array(t.type({
        prefabKey: t.string,
        blackboard: t.array(exports.BlackboardIO),
        overrideCameraEffect: t.null,
        passProfessionMaskFlag: t.boolean,
        professionMask: t.number,
    })),
    routes: t.array(t.type({
        motionMode: t.number,
        startPosition: t.type({
            row: t.number,
            col: t.number,
        }),
        endPosition: t.type({
            row: t.number,
            col: t.number,
        }),
        spawnRandomRange: t.type({
            x: t.number,
            y: t.number,
        }),
        spawnOffset: t.type({
            x: t.number,
            y: t.number,
        }),
        checkpoints: t.array(t.type({
            type: t.number,
            time: t.number,
            position: t.type({
                row: t.number,
                col: t.number,
            }),
            reachOffset: t.type({
                x: t.number,
                y: t.number,
            }),
            randomizeReachOffset: t.boolean,
            reachDistance: t.number,
        })),
        allowDiagonalMove: t.boolean,
        visitEveryTileCenter: t.boolean,
        visitEveryNodeCenter: t.boolean,
        visitEveryCheckPoint: t.boolean,
    })),
    extraRoutes: t.array(t.any),
    enemies: t.array(t.any),
    enemyDbRefs: t.array(t.type({
        useDb: t.boolean,
        id: t.string,
        level: t.number,
        overwrittenData: t.type({
            name: t.type({
                m_defined: t.boolean,
                m_value: t.number,
            }),
            description: t.type({
                m_defined: t.boolean,
                m_value: t.number,
            }),
            prefabKey: t.type({
                m_defined: t.boolean,
                m_value: t.number,
            }),
            attributes: exports.EnemyAttributesIO,
            lifePointReduce: t.type({
                m_defined: t.boolean,
                m_value: t.number,
            }),
            rangeRadius: t.type({
                m_defined: t.boolean,
                m_value: t.number,
            }),
            talentBlackboard: t.array(exports.BlackboardIO),
            skills: t.array(exports.EnemySkillsIO),
            spData: exports.EnemySpDataIO,
        }),
    })),
    waves: t.array(t.type({
        preDelay: t.number,
        postDelay: t.number,
        maxTimeWaitingForNextWave: t.number,
        fragments: t.array(t.type({
            preDelay: t.number,
            actions: t.array(t.type({
                actionType: t.number,
                managedByScheduler: t.boolean,
                key: t.string,
                count: t.number,
                preDelay: t.number,
                interval: t.number,
                routeIndex: t.number,
                blockFragment: t.boolean,
                autoPreviewRoute: t.boolean,
                isUnharmfulAndAlwaysCountAsKilled: t.boolean,
                hiddenGroup: t.string,
                randomSpawnGroupKey: t.string,
                weight: t.number,
                dontBlockWave: t.boolean,
            })),
            name: t.string,
        })),
    })),
    branches: t.type({
        frosts: t.type({
            phases: t.array(t.type({
                preDelay: t.number,
                actions: t.array(t.type({
                    actionType: t.number,
                    managedByScheduler: t.boolean,
                    key: t.string,
                    count: t.number,
                    preDelay: t.number,
                    interval: t.number,
                    routeIndex: t.number,
                    blockFragment: t.boolean,
                    autoPreviewRoute: t.boolean,
                    isUnharmfulAndAlwaysCountAsKilled: t.boolean,
                    hiddenGroup: t.string,
                    randomSpawnGroupKey: t.string,
                    weight: t.number,
                    weightValue: t.number,
                })),
            })),
        }),
    }),
    predefines: exports.StageDefinesIO,
    hardPredefines: exports.StageDefinesIO,
    excludeCharIdList: t.null,
    randomSeed: t.number,
    operaConfig: t.string,
});
exports.RogueRelicIO = t.type({
    id: t.string,
    name: t.string,
    description: t.string,
    usage: t.string,
    obtainApproach: t.string,
    iconId: t.string,
    type: t.string,
    subType: t.string,
    rarity: t.string,
    value: t.number,
    sortId: t.number,
    canSacrifice: t.boolean,
    unlockCondDesc: t.string,
});
exports.RogueStageIO = t.type({
    excel: t.type({
        id: t.string,
        linkedStageId: t.string,
        levelId: t.string,
        code: t.string,
        name: t.string,
        loadingPicId: t.string,
        description: t.string,
        eliteDesc: t.string,
        isBoss: t.number,
        isElite: t.number,
        difficulty: t.string,
        capsulePool: t.string,
        capsuleProb: t.number,
        vutresProb: t.array(t.number),
        boxProb: t.array(t.number),
    }),
    levels: exports.StageDataIO,
});
exports.RogueVariationIO = t.type({
    id: t.string,
    type: t.string,
    outerName: t.string,
    innerName: t.string,
    functionDesc: t.string,
    desc: t.string,
    iconId: t.string,
    sound: t.string,
});
exports.SandboxStageIO = t.type({
    excel: t.type({
        stageId: t.string,
        levelId: t.string,
        code: t.string,
        name: t.string,
        loadingPicId: t.string,
        description: t.string,
        actionCost: t.number,
        powerCost: t.number,
    }),
    levels: exports.StageDataIO,
});
exports.BaseIO = t.type({
    buffId: t.string,
    buffName: t.string,
    buffIcon: t.string,
    skillIcon: t.string,
    sortId: t.number,
    buffColor: t.string,
    textColor: t.string,
    buffCategory: t.string,
    roomType: t.string,
    description: t.string,
});
exports.CCStageIO = t.type({
    const: t.type({
        levelId: t.string,
        location: t.string,
        name: t.string,
        description: t.string,
    }),
    levels: exports.StageDataIO,
});
exports.DefinitionIO = t.type({
    termId: t.string,
    termName: t.string,
    description: t.string,
});
exports.EnemyIO = t.type({
    excel: t.type({
        enemyId: t.string,
        enemyIndex: t.string,
        enemyTags: t.array(t.string),
        sortId: t.number,
        name: t.string,
        enemyRace: t.string,
        enemyLevel: t.string,
        description: t.string,
        attackType: t.string,
        endure: t.string,
        attack: t.string,
        defence: t.string,
        resistance: t.string,
        ability: t.string,
        isInvalidKilled: t.boolean,
        overrideKillCntInfos: t.record(t.string, t.any),
        hideInHandbook: t.boolean,
    }),
    levels: t.type({
        Key: t.string,
        Value: t.array(t.type({
            level: t.number,
            enemyData: t.type({
                name: t.type({
                    m_defined: t.boolean,
                    m_value: t.string,
                }),
                description: t.type({
                    m_defined: t.boolean,
                    m_value: t.string,
                }),
                prefabKey: t.type({
                    m_defined: t.boolean,
                    m_value: t.string,
                }),
                attributes: exports.EnemyAttributesIO,
                lifePointReduce: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                levelType: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                rangeRadius: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                numOfExtraDrops: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                talentBlackboard: t.array(exports.BlackboardIO),
                skills: t.array(exports.EnemySkillsIO),
                spData: exports.EnemySpDataIO,
            }),
        })),
    }),
});
exports.GameEventIO = t.type({
    id: t.string,
    type: t.string,
    displayType: t.string,
    name: t.string,
    startTime: t.number,
    endTime: t.number,
    rewardEndTime: t.number,
    displayOnHome: t.boolean,
    hasStage: t.boolean,
    templateShopId: t.string,
    medalGroupId: t.string,
    isReplicate: t.boolean,
});
exports.ItemIO = t.type({
    data: t.type({
        itemId: t.string,
        name: t.string,
        description: t.string,
        rarity: t.number,
        iconId: t.string,
        overrideBkg: t.null,
        stackIconId: t.string,
        sortId: t.number,
        usage: t.string,
        obtainApproach: t.string,
        classifyType: t.string,
        itemType: t.string,
        stageDropList: t.array(t.type({
            stageId: t.string,
            occPer: t.string,
        })),
        buildingProductList: t.array(t.type({
            roomType: t.string,
            formulaId: t.string,
        })),
    }),
    formula: t.union([exports.ManufactFormulaIO, exports.WorkshopFormulaIO]),
});
exports.ModuleIO = t.type({
    info: t.type({
        uniEquipId: t.string,
        uniEquipName: t.string,
        uniEquipIcon: t.string,
        uniEquipDesc: t.string,
        typeIcon: t.string,
        typeName1: t.string,
        typeName2: t.string,
        equipShiningColor: t.string,
        showEvolvePhase: t.number,
        unlockEvolvePhase: t.number,
        charId: t.string,
        tmplId: t.string,
        showLevel: t.number,
        unlockLevel: t.number,
        unlockFavorPoint: t.number,
        missionList: t.array(t.string),
        itemCost: t.record(t.string, t.array(exports.LevelUpCostIO)),
        type: t.string,
        uniEquipGetTime: t.number,
        charEquipOrder: t.number,
    }),
    data: t.type({
        phases: t.array(t.type({
            equipLevel: t.number,
            parts: t.array(t.type({
                resKey: t.string,
                target: t.string,
                isToken: t.boolean,
                addOrOverrideTalentDataBundle: t.type({
                    candidates: t.array(t.type({
                        displayRangeId: t.boolean,
                        upgradeDescription: t.string,
                        talentIndex: t.number,
                        unlockCondition: exports.OperatorUnlockCondIO,
                        requiredPotentialRank: t.number,
                        prefabKey: t.string,
                        name: t.string,
                        description: t.string,
                        rangeId: t.string,
                        blackboard: t.array(exports.BlackboardIO),
                    })),
                }),
                overrideTraitDataBundle: t.type({
                    candidates: t.array(t.type({
                        additionalDescription: t.string,
                        unlockCondition: exports.OperatorUnlockCondIO,
                        requiredPotentialRank: t.number,
                        blackboard: t.array(exports.BlackboardIO),
                        overrideDescripton: t.string,
                        prefabKey: t.string,
                        rangeId: t.string,
                    })),
                }),
            })),
            attributeBlackboard: t.array(exports.BlackboardIO),
            tokenAttributeBlackboard: t.record(t.string, t.array(exports.BlackboardIO)),
        })),
    }),
});
exports.ParadoxIO = t.type({
    excel: t.type({
        charId: t.string,
        stageId: t.string,
        levelId: t.string,
        zoneId: t.string,
        code: t.string,
        name: t.string,
        loadingPicId: t.string,
        description: t.string,
        unlockParam: t.array(t.type({
            unlockType: t.number,
            unlockParam1: t.string,
            unlockParam2: t.string,
            unlockParam3: t.null,
        })),
        rewardItem: t.array(t.type({
            id: t.string,
            count: t.number,
            type: t.string,
        })),
        stageNameForShow: t.string,
        zoneNameForShow: t.string,
        picId: t.string,
        stageGetTime: t.number,
    }),
    levels: exports.StageDataIO,
});
exports.RogueThemeIO = t.type({
    name: t.string,
    stageDict: t.record(t.string, exports.RogueStageIO),
    toughStageDict: t.record(t.string, exports.RogueStageIO),
    relicDict: t.record(t.string, exports.RogueRelicIO),
    variationDict: t.record(t.string, exports.RogueVariationIO),
});
exports.SandboxActIO = t.type({
    stageDict: t.record(t.string, exports.SandboxStageIO),
});
exports.SkillIO = t.type({
    skillId: t.string,
    iconId: t.string,
    hidden: t.boolean,
    levels: t.array(t.type({
        name: t.string,
        rangeId: t.string,
        description: t.string,
        skillType: t.string,
        durationType: t.number,
        spData: t.type({
            spType: t.string,
            levelUpCost: t.null,
            maxChargeTime: t.number,
            spCost: t.number,
            initSp: t.number,
            increment: t.number,
        }),
        prefabId: t.string,
        duration: t.number,
        blackboard: t.array(exports.BlackboardIO),
    })),
});
exports.SkinIO = t.type({
    skinId: t.string,
    charId: t.string,
    tokenSkinMap: t.array(t.type({
        tokenId: t.string,
        tokenSkinId: t.string,
    })),
    illustId: t.string,
    dynIllustId: t.string,
    avatarId: t.string,
    portraitId: t.string,
    dynPortraitId: t.string,
    dynEntranceId: t.string,
    buildingId: t.string,
    battleSkin: t.type({
        overwritePrefab: t.boolean,
        skinOrPrefabId: t.string,
    }),
    isBuySkin: t.boolean,
    tmplId: t.string,
    voiceId: t.string,
    voiceType: t.string,
    displaySkin: t.type({
        skinName: t.string,
        colorList: t.tuple([t.string, t.string, t.string, t.string, t.string]),
        titleList: t.tuple([t.string, t.string]),
        modelName: t.string,
        drawerList: t.array(t.string),
        skinGroupId: t.string,
        skinGroupName: t.string,
        skinGroupSortIndex: t.number,
        content: t.string,
        dialog: t.string,
        usage: t.string,
        description: t.string,
        obtainApproach: t.string,
        sortId: t.number,
        displayTagId: t.string,
        getTime: t.number,
        onYear: t.number,
        onPeriod: t.number,
    }),
});
exports.StageIO = t.type({
    excel: t.type({
        stageType: t.string,
        difficulty: t.string,
        performanceStageFlag: t.string,
        diffGroup: t.string,
        unlockCondition: t.array(t.type({
            stageId: t.string,
            completeState: t.number,
        })),
        stageId: t.string,
        levelId: t.string,
        zoneId: t.string,
        code: t.string,
        name: t.string,
        description: t.string,
        hardStagedId: t.string,
        dangerLevel: t.string,
        dangerPoint: t.number,
        loadingPicId: t.string,
        canPractice: t.boolean,
        canBattleReplay: t.boolean,
        apCost: t.number,
        apFailReturn: t.number,
        etItemId: t.string,
        etCost: t.number,
        etFailReturn: t.number,
        etButtonStyle: t.string,
        apProtectTimes: t.number,
        diamondOnceDrop: t.number,
        practiceTicketCost: t.number,
        dailyStageDifficulty: t.number,
        expGain: t.number,
        goldGain: t.number,
        loseExpGain: t.number,
        loseGoldGain: t.number,
        passFavor: t.number,
        completeFavor: t.number,
        slProgress: t.number,
        displayMainItem: t.string,
        hilightMark: t.boolean,
        bossMark: t.boolean,
        isPredefined: t.boolean,
        isHardPredefined: t.boolean,
        isSkillSelectablePredefined: t.boolean,
        isStoryOnly: t.boolean,
        appearanceStyle: t.number,
        stageDropInfo: t.type({
            firstPassRewards: t.null,
            firstCompleteRewards: t.null,
            passRewards: t.null,
            completeRewards: t.null,
            displayRewards: t.array(t.type({
                type: t.string,
                id: t.string,
                dropType: t.string,
            })),
            displayDetailRewards: t.array(t.type({
                occPercent: t.number,
                type: t.string,
                id: t.string,
                dropType: t.string,
            })),
        }),
        startButtonOverrideId: t.string,
        isStagePatch: t.boolean,
        mainStageId: t.string,
    }),
    levels: exports.StageDataIO,
});
exports.OperatorIO = t.type({
    id: t.string,
    recruit: t.number,
    archetype: t.string,
    range: exports.GridRangeIO,
    skills: t.array(exports.SkillIO),
    modules: t.array(exports.ModuleIO),
    skins: t.array(exports.SkinIO),
    bases: t.array(t.type({
        condition: t.type({
            buffId: t.string,
            cond: exports.OperatorUnlockCondIO,
        }),
        skill: exports.BaseIO,
    })),
    paradox: exports.ParadoxIO,
    data: t.type({
        name: t.string,
        description: t.string,
        canUseGeneralPotentialItem: t.boolean,
        potentialItemId: t.string,
        nationId: t.string,
        groupId: t.string,
        teamId: t.string,
        displayNumber: t.string,
        tokenKey: t.string,
        appellation: t.string,
        position: t.string,
        tagList: t.array(t.string),
        itemUsage: t.string,
        itemDesc: t.string,
        itemObtainApproach: t.string,
        isNotObtainable: t.boolean,
        isSpChar: t.boolean,
        maxPotentialLevel: t.number,
        rarity: t.string,
        profession: t.string,
        subProfessionId: t.string,
        trait: t.type({
            candidates: t.array(t.type({
                unlockCondition: exports.OperatorUnlockCondIO,
                requiredPotentialRank: t.number,
                blackboard: t.array(exports.BlackboardIO),
                overrideDescripton: t.string,
                prefabKey: t.string,
                rangeId: t.string,
            })),
        }),
        phases: t.array(t.type({
            characterPrefabKey: t.string,
            rangeId: t.string,
            maxLevel: t.number,
            attributesKeyFrames: t.array(exports.AttributesKeyFrameIO),
            evolveCost: t.array(exports.LevelUpCostIO),
        })),
        skills: t.array(t.type({
            skillId: t.string,
            overridePrefabKey: t.string,
            overrideTokenKey: t.string,
            levelUpCostCond: t.array(exports.LevelUpCostCondIO),
            unlockCond: exports.OperatorUnlockCondIO,
        })),
        talents: t.array(t.type({
            candidates: t.array(t.type({
                unlockCondition: exports.OperatorUnlockCondIO,
                requiredPotentialRank: t.number,
                prefabKey: t.string,
                name: t.string,
                description: t.string,
                rangeId: t.string,
                blackboard: t.array(exports.BlackboardIO),
            })),
        })),
        potentialRanks: t.array(t.type({
            type: t.number,
            description: t.string,
            buff: t.type({
                attributes: t.type({
                    abnormalFlags: t.null,
                    abnormalImmunes: t.null,
                    abnormalAntis: t.null,
                    abnormalCombos: t.null,
                    abnormalComboImmunes: t.null,
                    attributeModifiers: t.array(t.type({
                        attributeType: t.number,
                        formulaItem: t.number,
                        value: t.number,
                        loadFromBlackboard: t.boolean,
                        fetchBaseValueFromSourceEntity: t.boolean,
                    })),
                }),
            }),
            equivalentCost: t.null,
        })),
        favorKeyFrames: t.array(exports.AttributesKeyFrameIO),
        allSkillLvlup: t.array(t.type({
            unlockCond: exports.OperatorUnlockCondIO,
            lvlUpCost: t.array(exports.LevelUpCostIO),
        })),
    }),
});
