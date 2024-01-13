"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorZod = exports.StageZod = exports.SkinZod = exports.SkillZod = exports.SandboxActZod = exports.RogueThemeZod = exports.ParadoxZod = exports.ModuleZod = exports.ItemZod = exports.GridRangeZod = exports.GameEventZod = exports.EnemyZod = exports.DefinitionZod = exports.CCStageZod = exports.BaseZod = void 0;
var z = require("zod");
var DefinedStringZod = z.strictObject({
    m_defined: z.boolean(),
    m_value: z.union([z.string(), z.null()]),
});
var DefinedStringArrayZod = z.strictObject({
    m_defined: z.boolean(),
    m_value: z.union([z.array(z.string()), z.null()]),
});
var DefinedNumberZod = z.strictObject({
    m_defined: z.boolean(),
    m_value: z.union([z.number(), z.null()]),
});
var DefinedBooleanZod = z.strictObject({
    m_defined: z.boolean(),
    m_value: z.boolean(),
});
var AttributesKeyFrameZod = z.strictObject({
    level: z.number(),
    data: z.strictObject({
        maxHp: z.number(),
        atk: z.number(),
        def: z.number(),
        magicResistance: z.number(),
        cost: z.number(),
        blockCnt: z.number(),
        moveSpeed: z.number(),
        attackSpeed: z.number(),
        baseAttackTime: z.number(),
        respawnTime: z.number(),
        hpRecoveryPerSec: z.number(),
        spRecoveryPerSec: z.number(),
        maxDeployCount: z.number(),
        maxDeckStackCnt: z.number(),
        tauntLevel: z.number(),
        massLevel: z.number(),
        baseForceLevel: z.number(),
        stunImmune: z.boolean(),
        silenceImmune: z.boolean(),
        sleepImmune: z.boolean(),
        frozenImmune: z.boolean(),
        levitateImmune: z.boolean(),
    }),
});
var BlackboardZod = z.strictObject({
    key: z.string(),
    value: z.union([z.number(), z.null()]),
    valueStr: z.union([z.string(), z.null(), z.undefined()]),
});
var EnemyAttributesZod = z.strictObject({
    maxHp: DefinedNumberZod,
    atk: DefinedNumberZod,
    def: DefinedNumberZod,
    magicResistance: DefinedNumberZod,
    cost: DefinedNumberZod,
    blockCnt: DefinedNumberZod,
    moveSpeed: DefinedNumberZod,
    attackSpeed: DefinedNumberZod,
    baseAttackTime: DefinedNumberZod,
    respawnTime: DefinedNumberZod,
    hpRecoveryPerSec: DefinedNumberZod,
    spRecoveryPerSec: DefinedNumberZod,
    maxDeployCount: DefinedNumberZod,
    massLevel: DefinedNumberZod,
    baseForceLevel: DefinedNumberZod,
    tauntLevel: z.union([DefinedNumberZod, z.undefined()]), // legacy
    epDamageResistance: z.union([DefinedNumberZod, z.undefined()]), // legacy
    epResistance: z.union([DefinedNumberZod, z.undefined()]), // ~
    stunImmune: DefinedBooleanZod,
    silenceImmune: DefinedBooleanZod,
    sleepImmune: z.union([DefinedBooleanZod, z.undefined()]),
    frozenImmune: z.union([DefinedBooleanZod, z.undefined()]), // legacy
    levitateImmune: z.union([DefinedBooleanZod, z.undefined()]), // legacy
});
var EnemySkillsZod = z.strictObject({
    prefabKey: z.string(),
    priority: z.number(),
    cooldown: z.number(),
    initCooldown: z.number(),
    spCost: z.number(),
    blackboard: z.union([z.array(BlackboardZod), z.null()]),
});
var EnemySpDataZod = z.strictObject({
    spType: z.string(),
    maxSp: z.number(),
    initSp: z.number(),
    increment: z.number(),
});
var EnemyDataZod = z.strictObject({
    name: DefinedStringZod,
    description: DefinedStringZod,
    prefabKey: DefinedStringZod,
    attributes: EnemyAttributesZod,
    applyWay: z.union([DefinedStringZod, z.undefined()]), // legacy
    motion: z.union([DefinedStringZod, z.undefined()]), // legacy
    enemyTags: z.union([DefinedStringArrayZod, z.undefined()]), // legacy
    lifePointReduce: DefinedNumberZod,
    levelType: z.union([DefinedStringZod, DefinedNumberZod, z.undefined()]), // legacy
    rangeRadius: DefinedNumberZod,
    numOfExtraDrops: z.union([DefinedNumberZod, z.undefined()]), // legacy
    viewRadius: z.union([DefinedNumberZod, z.undefined()]), // legacy
    notCountInTotal: z.union([DefinedBooleanZod, z.undefined()]), // legacy
    talentBlackboard: z.union([z.array(BlackboardZod), z.null()]),
    skills: z.union([z.array(EnemySkillsZod), z.null()]),
    spData: z.union([EnemySpDataZod, z.null()]),
});
var LevelUpCostZod = z.strictObject({
    id: z.string(),
    count: z.number(),
    type: z.string(),
});
var ManufactFormulaZod = z.strictObject({
    formulaId: z.string(),
    itemId: z.string(),
    count: z.number(),
    weight: z.number(),
    costPoint: z.number(),
    formulaType: z.string(),
    buffType: z.string(),
    costs: z.array(LevelUpCostZod),
    requireRooms: z.array(z.strictObject({
        roomId: z.string(),
        roomLevel: z.number(),
        roomCount: z.number(),
    })),
    requireStages: z.array(z.strictObject({
        stageId: z.string(),
        rank: z.number(),
    })),
});
var WorkshopFormulaZod = z.strictObject({
    sortId: z.number(),
    formulaId: z.string(),
    rarity: z.number(),
    itemId: z.string(),
    count: z.number(),
    goldCost: z.number(),
    apCost: z.number(),
    formulaType: z.string(),
    buffType: z.string(),
    extraOutcomeRate: z.number(),
    extraOutcomeGroup: z.array(z.strictObject({
        weight: z.number(),
        itemId: z.string(),
        itemCount: z.number(),
    })),
    costs: z.array(LevelUpCostZod),
    requireRooms: z.array(z.strictObject({
        roomId: z.string(),
        roomLevel: z.number(),
        roomCount: z.number(),
    })),
    requireStages: z.array(z.strictObject({
        stageId: z.string(),
        rank: z.number(),
    })),
});
var OperatorUnlockCondZod = z.strictObject({
    phase: z.union([z.string(), z.number()]),
    level: z.number(),
});
var LevelUpCostCondZod = z.strictObject({
    unlockCond: OperatorUnlockCondZod,
    lvlUpTime: z.number(),
    levelUpCost: z.union([z.array(LevelUpCostZod), z.null()]),
});
var StageDefinesZod = z.strictObject({
    characterInsts: z.array(z.any()),
    tokenInsts: z.array(z.strictObject({
        position: z.strictObject({
            row: z.number(),
            col: z.number(),
        }),
        direction: z.union([z.string(), z.number()]), // legacy
        hidden: z.boolean(),
        alias: z.union([z.string(), z.null()]),
        uniEquipIds: z.union([
            z.array(z.strictObject({
                key: z.string(),
                level: z.number(),
            })),
            z.null(), z.undefined()
        ] // legacy
        ),
        inst: z.strictObject({
            characterKey: z.string(),
            level: z.number(),
            phase: z.union([z.string(), z.number()]), // legacy
            favorPoint: z.number(),
            potentialRank: z.number(),
        }),
        skillIndex: z.number(),
        mainSkillLvl: z.number(),
        skinId: z.union([z.string(), z.null()]),
        tmplId: z.union([z.string(), z.null(), z.undefined()]),
        overrideSkillBlackboard: z.union([z.array(BlackboardZod), z.null(), z.undefined()]),
    })),
    characterCards: z.array(z.any()),
    tokenCards: z.array(z.any()),
});
var StageEffectZod = z.strictObject({
    key: z.string(),
    offset: z.strictObject({
        x: z.number(),
        y: z.number(),
        z: z.number(),
    }),
    direction: z.union([z.string(), z.number()]), // legacy
});
var StageActionZod = z.strictObject({
    actionType: z.union([z.string(), z.number()]), // legacy
    managedByScheduler: z.boolean(),
    key: z.string(),
    count: z.number(),
    preDelay: z.number(),
    interval: z.number(),
    routeIndex: z.number(),
    blockFragment: z.boolean(),
    autoPreviewRoute: z.boolean(),
    autoDisplayEnemyInfo: z.union([z.boolean(), z.undefined()]), // legacy
    isUnharmfulAndAlwaysCountAsKilled: z.boolean(),
    hiddenGroup: z.union([z.string(), z.null()]),
    randomSpawnGroupKey: z.union([z.string(), z.null(), z.undefined()]), // legacy
    randomSpawnGroupPackKey: z.union([z.string(), z.null(), z.undefined()]), // ~
    randomType: z.union([z.string(), z.number(), z.undefined()]), // ~
    weight: z.union([z.number(), z.undefined()]), // ~
    dontBlockWave: z.union([z.boolean(), z.undefined()]), // ~
    isValid: z.union([z.boolean(), z.undefined()]), // ~
    extraMeta: z.union([z.null(), z.undefined()]), // ~
});
var StageDataZod = z.strictObject({
    options: z.strictObject({
        characterLimit: z.number(),
        maxLifePoint: z.number(),
        initialCost: z.number(),
        maxCost: z.number(),
        costIncreaseTime: z.number(),
        moveMultiplier: z.number(),
        steeringEnabled: z.boolean(),
        isTrainingLevel: z.boolean(),
        isHardTrainingLevel: z.union([z.boolean(), z.undefined()]), // legacy
        isPredefinedCardsSelectable: z.union([z.boolean(), z.undefined()]), // legacy
        maxPlayTime: z.union([z.number(), z.undefined()]), // legacy
        functionDisableMask: z.union([z.string(), z.number()]),
        configBlackBoard: z.union([z.array(BlackboardZod), z.null(), z.undefined()]), // legacy
    }),
    levelId: z.union([z.string(), z.null()]),
    mapId: z.union([z.string(), z.null()]),
    bgmEvent: z.union([z.string(), z.null()]),
    environmentSe: z.union([z.string(), z.null()]),
    mapData: z.strictObject({
        map: z.array(z.array(z.number())),
        tiles: z.array(z.strictObject({
            tileKey: z.string(),
            heightType: z.union([z.string(), z.number()]), // keep number for legacy stages (monster hunter, vignettes, etc.)
            buildableType: z.union([z.string(), z.number()]), // ~
            passableMask: z.union([z.string(), z.number()]), // ~
            playerSideMask: z.union([z.string(), z.number(), z.undefined()]), // ~
            blackboard: z.union([z.array(BlackboardZod), z.null()]),
            effects: z.union([z.array(StageEffectZod), z.null()]),
        })),
        blockEdges: z.union([z.array(z.any()), z.null()]),
        tags: z.union([z.array(z.string()), z.null()]),
        effects: z.union([z.array(StageEffectZod), z.null()]),
        layerRects: z.union([z.null(), z.undefined()]),
        width: z.number().optional(),
        height: z.number().optional(),
    }),
    tilesDisallowToLocate: z.array(z.any()),
    runes: z.union([
        z.array(z.strictObject({
            difficultyMask: z.union([z.string(), z.number()]), // legacy
            key: z.string(),
            professionMask: z.union([z.string(), z.number(), z.undefined()]), // legacy
            buildableMask: z.union([z.string(), z.number()]), // legacy
            blackboard: z.array(BlackboardZod),
        })),
        z.null()
    ]),
    globalBuffs: z.union([
        z.array(z.strictObject({
            prefabKey: z.string(),
            blackboard: z.union([z.array(BlackboardZod), z.null()]),
            overrideCameraEffect: z.null(),
            passProfessionMaskFlag: z.union([z.boolean(), z.undefined()]),
            professionMask: z.union([z.string(), z.number(), z.undefined()]),
            useExtraData: z.boolean().optional(),
        })),
        z.null()
    ]),
    routes: z.array(z.union([
        z.strictObject({
            motionMode: z.union([z.string(), z.number()]), // keep number for legacy
            startPosition: z.strictObject({
                row: z.number(),
                col: z.number(),
            }),
            endPosition: z.strictObject({
                row: z.number(),
                col: z.number(),
            }),
            spawnRandomRange: z.strictObject({
                x: z.number(),
                y: z.number(),
            }),
            spawnOffset: z.strictObject({
                x: z.number(),
                y: z.number(),
            }),
            checkpoints: z.union([
                z.array(z.strictObject({
                    type: z.union([z.string(), z.number()]), // keep number for legacy
                    time: z.number(),
                    position: z.strictObject({
                        row: z.number(),
                        col: z.number(),
                    }),
                    reachOffset: z.strictObject({
                        x: z.number(),
                        y: z.number(),
                    }),
                    randomizeReachOffset: z.boolean(),
                    reachDistance: z.number(),
                })),
                z.null()
            ]),
            allowDiagonalMove: z.boolean(),
            visitEveryTileCenter: z.boolean(),
            visitEveryNodeCenter: z.boolean(),
            visitEveryCheckPoint: z.union([z.boolean(), z.undefined()]), // legacy
        }),
        z.null() // legacy
    ])),
    extraRoutes: z.union([z.array(z.any()), z.undefined()]),
    enemies: z.array(z.any()),
    enemyDbRefs: z.array(z.strictObject({
        useDb: z.boolean(),
        id: z.string(),
        level: z.number(),
        overwrittenData: z.union([EnemyDataZod, z.null()]),
    })),
    waves: z.array(z.strictObject({
        preDelay: z.number(),
        postDelay: z.number(),
        maxTimeWaitingForNextWave: z.number(),
        fragments: z.array(z.strictObject({
            preDelay: z.number(),
            actions: z.array(StageActionZod),
            name: z.string().nullable().optional(),
        })),
        advancedWaveTag: z.union([z.string(), z.null(), z.undefined()]), // legacy
        name: z.string().nullable().optional(),
    })),
    branches: z.union([
        z.record(z.string(), z.strictObject({
            phases: z.array(z.strictObject({
                preDelay: z.number(),
                actions: z.array(StageActionZod),
                m_randomActionGroups: z.null().optional(),
                m_actionWithRandomSpawn: z.null().optional(),
                m_validActionPackKeys: z.null().optional(),
            })),
        })),
        z.null()
    ]),
    predefines: z.union([StageDefinesZod, z.null()]),
    hardPredefines: z.union([StageDefinesZod, z.null(), z.undefined()]),
    excludeCharIdList: z.null(),
    randomSeed: z.number(),
    operaConfig: z.union([z.string(), z.null(), z.undefined()]),
    runtimeData: z.union([z.null(), z.undefined()]), // legacy
});
var RogueRelicZod = z.strictObject({
    id: z.string(),
    name: z.string(),
    description: z.union([z.string(), z.null()]),
    usage: z.string(),
    obtainApproach: z.string(),
    iconId: z.string(),
    type: z.string(),
    subType: z.string(),
    rarity: z.string(),
    value: z.number(),
    sortId: z.number(),
    canSacrifice: z.boolean(),
    unlockCondDesc: z.union([z.string(), z.null()]),
});
var RogueStageZod = z.strictObject({
    excel: z.strictObject({
        id: z.string(),
        linkedStageId: z.string(),
        levelId: z.string(),
        code: z.string(),
        name: z.string(),
        loadingPicId: z.string(),
        description: z.string(),
        eliteDesc: z.union([z.string(), z.null()]),
        isBoss: z.number(),
        isElite: z.number(),
        difficulty: z.string(),
        capsulePool: z.union([z.string(), z.null()]),
        capsuleProb: z.number(),
        vutresProb: z.array(z.number()),
        boxProb: z.array(z.number()),
        specialNodeId: z.string().nullable(),
    }),
    levels: StageDataZod,
});
var RogueVariationZod = z.strictObject({
    id: z.string(),
    type: z.string(),
    outerName: z.string(),
    innerName: z.string(),
    functionDesc: z.string(),
    desc: z.string(),
    iconId: z.union([z.string(), z.null()]),
    sound: z.union([z.string(), z.null()]),
});
var SandboxStageZod = z.strictObject({
    excel: z.strictObject({
        stageId: z.string(),
        levelId: z.string(),
        code: z.string(),
        name: z.string(),
        loadingPicId: z.string(),
        description: z.string(),
        actionCost: z.number(),
        powerCost: z.number(),
    }),
    levels: StageDataZod,
});
exports.BaseZod = z.strictObject({
    buffId: z.string(),
    buffName: z.string(),
    buffIcon: z.string(),
    skillIcon: z.string(),
    sortId: z.number(),
    buffColor: z.string(),
    textColor: z.string(),
    buffCategory: z.string(),
    roomType: z.string(),
    description: z.string(),
});
exports.CCStageZod = z.strictObject({
    const: z.strictObject({
        levelId: z.string(),
        location: z.string(),
        name: z.string(),
        description: z.string(),
    }),
    levels: StageDataZod,
});
exports.DefinitionZod = z.strictObject({
    termId: z.string(),
    termName: z.string(),
    description: z.string(),
});
exports.EnemyZod = z.strictObject({
    excel: z.strictObject({
        enemyId: z.string(),
        enemyIndex: z.string(),
        enemyTags: z.union([z.array(z.string()), z.null()]),
        sortId: z.number(),
        name: z.string(),
        enemyLevel: z.enum(['NORMAL', 'ELITE', 'BOSS']),
        description: z.string(),
        attackType: z.null(),
        ability: z.null(),
        isInvalidKilled: z.boolean(),
        overrideKillCntInfos: z.record(z.string(), z.any()),
        hideInHandbook: z.boolean(),
        abilityList: z.array(z.strictObject({
            text: z.string(),
            textFormat: z.enum(['NORMAL', 'SILENCE', 'TITLE'])
        })),
        linkEnemies: z.array(z.string()),
        damageType: z.array(z.enum(['PHYSIC', 'MAGIC', 'NO_DAMAGE', 'HEAL'])),
        invisibleDetail: z.boolean(),
    }),
    levels: z.strictObject({
        Key: z.string(),
        Value: z.array(z.strictObject({
            level: z.number(),
            enemyData: EnemyDataZod,
        })),
    }),
});
exports.GameEventZod = z.strictObject({
    id: z.string(),
    type: z.string(),
    displayType: z.string(),
    name: z.string(),
    startTime: z.number(),
    endTime: z.number(),
    rewardEndTime: z.number(),
    displayOnHome: z.boolean(),
    hasStage: z.boolean(),
    templateShopId: z.union([z.string(), z.null()]),
    medalGroupId: z.union([z.string(), z.null()]),
    ungroupedMedalIds: z.array(z.string()).nullable(),
    isReplicate: z.boolean(),
    needFixedSync: z.boolean(),
});
exports.GridRangeZod = z.strictObject({
    id: z.string(),
    direction: z.number(),
    grids: z.array(z.strictObject({
        row: z.number(),
        col: z.number(),
    })),
});
exports.ItemZod = z.strictObject({
    data: z.strictObject({
        itemId: z.string(),
        name: z.string(),
        description: z.union([z.string(), z.null()]),
        rarity: z.string(),
        iconId: z.string(),
        overrideBkg: z.null(),
        stackIconId: z.union([z.string(), z.null()]),
        sortId: z.number(),
        usage: z.union([z.string(), z.null()]),
        obtainApproach: z.union([z.string(), z.null()]),
        hideInItemGet: z.boolean(),
        classifyType: z.string(),
        itemType: z.string(),
        stageDropList: z.array(z.strictObject({
            stageId: z.string(),
            occPer: z.string(),
        })),
        buildingProductList: z.array(z.strictObject({
            roomType: z.string(),
            formulaId: z.string(),
        })),
    }),
    formula: z.union([ManufactFormulaZod, WorkshopFormulaZod, z.null()]),
});
exports.ModuleZod = z.strictObject({
    info: z.strictObject({
        uniEquipId: z.string(),
        uniEquipName: z.string(),
        uniEquipIcon: z.string(),
        uniEquipDesc: z.string(),
        typeIcon: z.string(),
        typeName1: z.string(),
        typeName2: z.union([z.string(), z.null()]),
        equipShiningColor: z.string(),
        showEvolvePhase: z.string(),
        unlockEvolvePhase: z.string(),
        charId: z.string(),
        tmplId: z.union([z.string(), z.null()]),
        showLevel: z.number(),
        unlockLevel: z.number(),
        unlockFavorPoint: z.number(),
        missionList: z.array(z.string()),
        itemCost: z.union([z.record(z.string(), z.array(LevelUpCostZod)), z.null()]),
        type: z.string(),
        uniEquipGetTime: z.number(),
        charEquipOrder: z.number(),
    }),
    data: z.union([
        z.strictObject({
            phases: z.array(z.strictObject({
                equipLevel: z.number(),
                parts: z.array(z.strictObject({
                    resKey: z.union([z.string(), z.null()]),
                    target: z.string(),
                    isToken: z.boolean(),
                    addOrOverrideTalentDataBundle: z.strictObject({
                        candidates: z.union([
                            z.array(z.strictObject({
                                displayRangeId: z.boolean(),
                                upgradeDescription: z.string(),
                                talentIndex: z.number(),
                                unlockCondition: OperatorUnlockCondZod,
                                requiredPotentialRank: z.number(),
                                prefabKey: z.string(),
                                name: z.union([z.string(), z.null()]),
                                description: z.union([z.string(), z.null()]),
                                rangeId: z.union([z.string(), z.null()]),
                                blackboard: z.array(BlackboardZod),
                                tokenKey: z.string().optional(),
                            })),
                            z.null()
                        ]),
                    }),
                    overrideTraitDataBundle: z.strictObject({
                        candidates: z.union([
                            z.array(z.strictObject({
                                additionalDescription: z.union([z.string(), z.null()]),
                                unlockCondition: OperatorUnlockCondZod,
                                requiredPotentialRank: z.number(),
                                blackboard: z.array(BlackboardZod),
                                overrideDescripton: z.union([z.string(), z.null()]),
                                prefabKey: z.union([z.string(), z.null()]),
                                rangeId: z.union([z.string(), z.null()]),
                            })),
                            z.null()
                        ]),
                    }),
                })),
                attributeBlackboard: z.array(BlackboardZod),
                tokenAttributeBlackboard: z.record(z.string(), z.array(BlackboardZod)),
            })),
        }),
        z.null()
    ]),
});
exports.ParadoxZod = z.strictObject({
    excel: z.strictObject({
        charId: z.string(),
        stageId: z.string(),
        levelId: z.string(),
        zoneId: z.string(),
        code: z.string(),
        name: z.string(),
        loadingPicId: z.string(),
        description: z.string(),
        unlockParam: z.array(z.strictObject({
            unlockType: z.string(),
            unlockParam1: z.string(),
            unlockParam2: z.string(),
            unlockParam3: z.null(),
        })),
        rewardItem: z.array(z.strictObject({
            id: z.string(),
            count: z.number(),
            type: z.string(),
        })),
        stageNameForShow: z.string(),
        zoneNameForShow: z.string(),
        picId: z.string(),
        stageGetTime: z.number(),
    }),
    levels: StageDataZod,
});
exports.RogueThemeZod = z.strictObject({
    name: z.string(),
    stageDict: z.record(z.string(), RogueStageZod),
    toughStageDict: z.record(z.string(), RogueStageZod),
    relicDict: z.record(z.string(), RogueRelicZod),
    variationDict: z.record(z.string(), RogueVariationZod),
});
exports.SandboxActZod = z.strictObject({
    stageDict: z.record(z.string(), SandboxStageZod),
});
exports.SkillZod = z.strictObject({
    skillId: z.string(),
    iconId: z.union([z.string(), z.null()]),
    hidden: z.boolean(),
    levels: z.array(z.strictObject({
        name: z.string(),
        rangeId: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        skillType: z.string(),
        durationType: z.string(),
        spData: z.strictObject({
            spType: z.union([z.string(), z.number()]),
            levelUpCost: z.null(),
            maxChargeTime: z.number(),
            spCost: z.number(),
            initSp: z.number(),
            increment: z.number(),
        }),
        prefabId: z.union([z.string(), z.null()]),
        duration: z.number(),
        blackboard: z.array(BlackboardZod),
    })),
});
exports.SkinZod = z.strictObject({
    skinId: z.string(),
    charId: z.string(),
    tokenSkinMap: z.union([
        z.array(z.strictObject({
            tokenId: z.string(),
            tokenSkinId: z.string(),
        })),
        z.null()
    ]),
    illustId: z.union([z.string(), z.null()]),
    dynIllustId: z.union([z.string(), z.null()]),
    avatarId: z.string(),
    portraitId: z.union([z.string(), z.null()]),
    dynPortraitId: z.union([z.string(), z.null()]),
    dynEntranceId: z.union([z.string(), z.null()]),
    buildingId: z.union([z.string(), z.null()]),
    battleSkin: z.strictObject({
        overwritePrefab: z.boolean(),
        skinOrPrefabId: z.union([z.string(), z.null()]),
    }),
    isBuySkin: z.boolean(),
    tmplId: z.union([z.string(), z.null()]),
    voiceId: z.union([z.string(), z.null()]),
    voiceType: z.string(),
    displaySkin: z.strictObject({
        skinName: z.union([z.string(), z.null()]),
        colorList: z.union([z.array(z.string()), z.null()]),
        titleList: z.array(z.string()).nullable(),
        modelName: z.union([z.string(), z.null()]),
        drawerList: z.union([z.array(z.string()), z.null()]),
        designerList: z.array(z.string()).nullable(),
        skinGroupId: z.union([z.string(), z.null()]),
        skinGroupName: z.union([z.string(), z.null()]),
        skinGroupSortIndex: z.number(),
        content: z.union([z.string(), z.null()]),
        dialog: z.union([z.string(), z.null()]),
        usage: z.union([z.string(), z.null()]),
        description: z.union([z.string(), z.null()]),
        obtainApproach: z.union([z.string(), z.null()]),
        sortId: z.number(),
        displayTagId: z.union([z.string(), z.null()]),
        getTime: z.number(),
        onYear: z.number(),
        onPeriod: z.number(),
    }),
});
exports.StageZod = z.strictObject({
    excel: z.strictObject({
        stageType: z.string(),
        difficulty: z.string(),
        performanceStageFlag: z.string(),
        diffGroup: z.string(),
        unlockCondition: z.array(z.union([
            z.strictObject({
                stageId: z.string(),
                completeState: z.string(),
            }),
            z.null()
        ])),
        stageId: z.string(),
        levelId: z.string(),
        zoneId: z.string(),
        code: z.string(),
        name: z.string(),
        description: z.string(),
        hardStagedId: z.union([z.string(), z.null()]),
        dangerLevel: z.union([z.string(), z.null()]),
        dangerPoint: z.number(),
        loadingPicId: z.string(),
        canPractice: z.boolean(),
        canBattleReplay: z.boolean(),
        apCost: z.number(),
        apFailReturn: z.number(),
        etItemId: z.union([z.string(), z.null()]),
        etCost: z.number(),
        etFailReturn: z.number(),
        etButtonStyle: z.union([z.string(), z.null()]),
        apProtectTimes: z.number(),
        diamondOnceDrop: z.number(),
        practiceTicketCost: z.number(),
        dailyStageDifficulty: z.number(),
        expGain: z.number(),
        goldGain: z.number(),
        loseExpGain: z.number(),
        loseGoldGain: z.number(),
        passFavor: z.number(),
        completeFavor: z.number(),
        slProgress: z.number(),
        displayMainItem: z.union([z.string(), z.null()]),
        hilightMark: z.boolean(),
        bossMark: z.boolean(),
        isPredefined: z.boolean(),
        isHardPredefined: z.boolean(),
        isSkillSelectablePredefined: z.boolean(),
        isStoryOnly: z.boolean(),
        appearanceStyle: z.string(),
        stageDropInfo: z.strictObject({
            firstPassRewards: z.null(),
            firstCompleteRewards: z.null(),
            passRewards: z.null(),
            completeRewards: z.null(),
            displayRewards: z.array(z.strictObject({
                type: z.string(),
                id: z.string(),
                dropType: z.string(),
            })),
            displayDetailRewards: z.array(z.strictObject({
                occPercent: z.string(),
                type: z.string(),
                id: z.string(),
                dropType: z.string(),
            })),
        }),
        canUseCharm: z.boolean(),
        canUseTech: z.boolean(),
        canUseTrapTool: z.boolean(),
        canUseBattlePerformance: z.boolean(),
        startButtonOverrideId: z.union([z.string(), z.null()]),
        isStagePatch: z.boolean(),
        mainStageId: z.union([z.string(), z.null()]),
        extraCondition: z.union([
            z.array(z.strictObject({
                index: z.number(),
                template: z.string(),
                unlockParam: z.array(z.string()),
            })),
            z.null()
        ]),
        extraInfo: z.union([
            z.array(z.strictObject({
                stageId: z.string(),
                rewards: z.array(z.strictObject({
                    id: z.string(),
                    count: z.number(),
                    type: z.string(),
                })),
                progressInfo: z.strictObject({
                    progressType: z.string(),
                    descList: z.record(z.string(), z.string()),
                })
            })),
            z.null()
        ])
    }),
    levels: StageDataZod,
});
exports.OperatorZod = z.strictObject({
    id: z.string(),
    recruit: z.number(),
    archetype: z.string(),
    range: exports.GridRangeZod,
    skills: z.array(exports.SkillZod),
    modules: z.array(exports.ModuleZod),
    skins: z.array(exports.SkinZod),
    bases: z.array(z.strictObject({
        condition: z.strictObject({
            buffId: z.string(),
            cond: OperatorUnlockCondZod,
        }),
        skill: exports.BaseZod,
    })),
    paradox: z.union([exports.ParadoxZod, z.null()]),
    data: z.strictObject({
        name: z.string(),
        description: z.string(),
        canUseGeneralPotentialItem: z.boolean(),
        canUseActivityPotentialItem: z.boolean(),
        potentialItemId: z.union([z.string(), z.null()]),
        activityPotentialItemId: z.string().nullable(),
        classicPotentialItemId: z.string().nullable(),
        nationId: z.union([z.string(), z.null()]),
        groupId: z.union([z.string(), z.null()]),
        teamId: z.union([z.string(), z.null()]),
        displayNumber: z.union([z.string(), z.null()]),
        appellation: z.string(),
        position: z.string(),
        tagList: z.array(z.string()),
        itemUsage: z.union([z.string(), z.null()]),
        itemDesc: z.union([z.string(), z.null()]),
        itemObtainApproach: z.union([z.string(), z.null()]),
        isNotObtainable: z.boolean(),
        isSpChar: z.boolean(),
        maxPotentialLevel: z.number(),
        rarity: z.string(),
        profession: z.string(),
        subProfessionId: z.string(),
        trait: z.union([
            z.strictObject({
                candidates: z.array(z.strictObject({
                    unlockCondition: OperatorUnlockCondZod,
                    requiredPotentialRank: z.number(),
                    blackboard: z.array(BlackboardZod),
                    overrideDescripton: z.union([z.string(), z.null()]),
                    prefabKey: z.union([z.string(), z.null()]),
                    rangeId: z.union([z.string(), z.null()]),
                })),
            }),
            z.null()
        ]),
        phases: z.array(z.strictObject({
            characterPrefabKey: z.string(),
            rangeId: z.string(),
            maxLevel: z.number(),
            attributesKeyFrames: z.array(AttributesKeyFrameZod),
            evolveCost: z.union([z.array(LevelUpCostZod), z.null()]),
        })),
        skills: z.array(z.strictObject({
            skillId: z.string(),
            overridePrefabKey: z.union([z.string(), z.null()]),
            overrideTokenKey: z.union([z.string(), z.null()]),
            levelUpCostCond: z.array(LevelUpCostCondZod),
            unlockCond: OperatorUnlockCondZod,
        })),
        displayTokenDict: z.record(z.boolean()).nullable(),
        talents: z.union([
            z.array(z.strictObject({
                candidates: z.array(z.strictObject({
                    unlockCondition: OperatorUnlockCondZod,
                    requiredPotentialRank: z.number(),
                    prefabKey: z.string(),
                    name: z.string(),
                    description: z.string(),
                    rangeId: z.union([z.string(), z.null()]),
                    blackboard: z.array(BlackboardZod),
                    tokenKey: z.string().nullable(),
                })),
            })),
            z.null()
        ]),
        potentialRanks: z.array(z.strictObject({
            type: z.string(),
            description: z.string(),
            buff: z.union([
                z.strictObject({
                    attributes: z.strictObject({
                        abnormalFlags: z.null(),
                        abnormalImmunes: z.null(),
                        abnormalAntis: z.null(),
                        abnormalCombos: z.null(),
                        abnormalComboImmunes: z.null(),
                        attributeModifiers: z.array(z.strictObject({
                            attributeType: z.string(),
                            formulaItem: z.string(),
                            value: z.number(),
                            loadFromBlackboard: z.boolean(),
                            fetchBaseValueFromSourceEntity: z.boolean(),
                        })),
                    }),
                }),
                z.null()
            ]),
            equivalentCost: z.null(),
        })),
        favorKeyFrames: z.array(AttributesKeyFrameZod),
        allSkillLvlup: z.array(z.strictObject({
            unlockCond: OperatorUnlockCondZod,
            lvlUpCost: z.union([z.array(LevelUpCostZod), z.null()]),
        })),
    }),
});
