import * as t from 'io-ts';

const stringIO = t.type({
    m_defined: t.boolean,
    m_value: t.union([t.string, t.null]),
});
const stringArrayIO = t.type({
    m_defined: t.boolean,
    m_value: t.union([t.array(t.string), t.null]),
});
const numberIO = t.type({
    m_defined: t.boolean,
    m_value: t.union([t.number, t.null]),
});
const booleanIO = t.type({
    m_defined: t.boolean,
    m_value: t.boolean,
});

export const AttributesKeyFrameIO = t.type({
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
export const BlackboardIO = t.type({
    key: t.string,
    value: t.union([t.number, t.null]),
    valueStr: t.union([t.string, t.null, t.undefined]),
});
export const EnemyAttributesIO = t.type({
    maxHp: numberIO,
    atk: numberIO,
    def: numberIO,
    magicResistance: numberIO,
    cost: numberIO,
    blockCnt: numberIO,
    moveSpeed: numberIO,
    attackSpeed: numberIO,
    baseAttackTime: numberIO,
    respawnTime: numberIO,
    hpRecoveryPerSec: numberIO,
    spRecoveryPerSec: numberIO,
    maxDeployCount: numberIO,
    massLevel: numberIO,
    baseForceLevel: numberIO,
    tauntLevel: t.union([numberIO, t.undefined]), // legacy
    epDamageResistance: t.union([numberIO, t.undefined]),   // legacy
    epResistance: t.union([numberIO, t.undefined]),         // ~
    stunImmune: booleanIO,
    silenceImmune: booleanIO,
    sleepImmune: t.union([booleanIO, t.undefined]),
    frozenImmune: t.union([booleanIO, t.undefined]), // legacy
    levitateImmune: t.union([booleanIO, t.undefined]), // legacy
});
export const EnemySkillsIO = t.type({
    prefabKey: t.string,
    priority: t.number,
    cooldown: t.number,
    initCooldown: t.number,
    spCost: t.number,
    blackboard: t.union([t.array(BlackboardIO), t.null]),
});
export const EnemySpDataIO = t.type({
    spType: t.string,
    maxSp: t.number,
    initSp: t.number,
    increment: t.number,
});
export const EnemyData = t.type({
    name: stringIO,
    description: stringIO,
    prefabKey: stringIO,
    attributes: EnemyAttributesIO,
    applyWay: t.union([stringIO, t.undefined]),         // legacy
    motion: t.union([stringIO, t.undefined]),           // legacy
    enemyTags: t.union([stringArrayIO, t.undefined]),   // legacy
    lifePointReduce: numberIO,
    levelType: t.union([stringIO, numberIO, t.undefined]),  // legacy
    rangeRadius: numberIO,
    numOfExtraDrops: t.union([numberIO, t.undefined]),  // legacy
    viewRadius: t.union([numberIO, t.undefined]),       // legacy
    notCountInTotal: t.union([booleanIO, t.undefined]), // legacy
    talentBlackboard: t.union([t.array(BlackboardIO), t.null]),
    skills: t.union([t.array(EnemySkillsIO), t.null]),
    spData: t.union([EnemySpDataIO, t.null]),
});
export const GridRangeIO = t.type({
    id: t.string,
    direction: t.number,
    grids: t.array(
        t.type({
            row: t.number,
            col: t.number,
        })
    ),
});
export const LevelUpCostIO = t.type({
    id: t.string,
    count: t.number,
    type: t.string,
});
export const ManufactFormulaIO = t.type({
    formulaId: t.string,
    itemId: t.string,
    count: t.number,
    weight: t.number,
    costPoint: t.number,
    formulaType: t.string,
    buffType: t.string,
    costs: t.array(LevelUpCostIO),
    requireRooms: t.array(
        t.type({
            roomId: t.string,
            roomLevel: t.number,
            roomCount: t.number,
        })
    ),
    requireStages: t.array(
        t.type({
            stageId: t.string,
            rank: t.number,
        })
    ),
});
export const WorkshopFormulaIO = t.type({
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
    extraOutcomeGroup: t.array(
        t.type({
            weight: t.number,
            itemId: t.string,
            itemCount: t.number,
        })
    ),
    costs: t.array(LevelUpCostIO),
    requireRooms: t.array(
        t.type({
            roomId: t.string,
            roomLevel: t.number,
            roomCount: t.number,
        })
    ),
    requireStages: t.array(
        t.type({
            stageId: t.string,
            rank: t.number,
        })
    ),
});
export const OperatorUnlockCondIO = t.type({
    phase: t.union([t.string, t.number]),
    level: t.number,
});
export const LevelUpCostCondIO = t.type({
    unlockCond: OperatorUnlockCondIO,
    lvlUpTime: t.number,
    levelUpCost: t.union([t.array(LevelUpCostIO), t.null]),
});
export const StageDefinesIO = t.type({
    characterInsts: t.array(t.any),
    tokenInsts: t.array(
        t.type({
            position: t.type({
                row: t.number,
                col: t.number,
            }),
            direction: t.union([t.string, t.number]), // legacy
            hidden: t.boolean,
            alias: t.union([t.string, t.null]),
            uniEquipIds: t.union([
                t.array(
                    t.type({
                        key: t.string,
                        level: t.number,
                    })
                ),
                t.null, t.undefined] // legacy
            ),
            inst: t.type({
                characterKey: t.string,
                level: t.number,
                phase: t.union([t.string, t.number]), // legacy
                favorPoint: t.number,
                potentialRank: t.number,
            }),
            skillIndex: t.number,
            mainSkillLvl: t.number,
            skinId: t.union([t.string, t.null]),
            tmplId: t.union([t.string, t.null, t.undefined]),
            overrideSkillBlackboard: t.union([t.array(BlackboardIO), t.null, t.undefined]),
        })
    ),
    characterCards: t.array(t.any),
    tokenCards: t.array(t.any),
});
export const StageEffectIO = t.type({
    key: t.string,
    offset: t.type({
        x: t.number,
        y: t.number,
        z: t.number,
    }),
    direction: t.union([t.string, t.number]), // legacy
});
export const StageActionIO = t.type({
    preDelay: t.number,
    actions: t.array(
        t.type({
            actionType: t.union([t.string, t.number]), // legacy
            managedByScheduler: t.boolean,
            key: t.string,
            count: t.number,
            preDelay: t.number,
            interval: t.number,
            routeIndex: t.number,
            blockFragment: t.boolean,
            autoPreviewRoute: t.boolean,
            autoDisplayEnemyInfo: t.union([t.boolean, t.undefined]),            // legacy
            isUnharmfulAndAlwaysCountAsKilled: t.boolean,
            hiddenGroup: t.union([t.string, t.null]),
            randomSpawnGroupKey: t.union([t.string, t.null, t.undefined]),      // legacy
            randomSpawnGroupPackKey: t.union([t.string, t.null, t.undefined]),  // legacy
            randomType: t.union([t.string, t.number, t.undefined]),             // legacy
            weight: t.union([t.number, t.undefined]),                           // legacy
            dontBlockWave: t.union([t.boolean, t.undefined]),                   // legacy
            isValid: t.union([t.boolean, t.undefined]),                         // legacy
            extraMeta: t.union([t.null, t.undefined]),                          // legacy
        })
    ),
})
export const StageDataIO = t.type({
    options: t.type({
        characterLimit: t.number,
        maxLifePoint: t.number,
        initialCost: t.number,
        maxCost: t.number,
        costIncreaseTime: t.number,
        moveMultiplier: t.number,
        steeringEnabled: t.boolean,
        isTrainingLevel: t.boolean,
        isHardTrainingLevel: t.union([t.boolean, t.undefined]), // legacy
        isPredefinedCardsSelectable: t.union([t.boolean, t.undefined]), // legacy
        maxPlayTime: t.union([t.number, t.undefined]), // legacy
        functionDisableMask: t.union([t.string, t.number]),
        configBlackBoard: t.union([t.array(BlackboardIO), t.null, t.undefined]), // legacy
    }),
    levelId: t.union([t.string, t.null]),
    mapId: t.union([t.string, t.null]),
    bgmEvent: t.union([t.string, t.null]),
    environmentSe: t.union([t.string, t.null]),
    mapData: t.type({
        map: t.array(t.array(t.number)),
        tiles: t.array(
            t.type({
                tileKey: t.string,
                heightType: t.union([t.string, t.number]),      // keep number for legacy stages (monster hunter, vignettes, etc.)
                buildableType: t.union([t.string, t.number]),   // ~
                passableMask: t.union([t.string, t.number]),    // ~
                playerSideMask: t.union([t.string, t.number, t.undefined]),  // ~
                blackboard: t.union([t.array(BlackboardIO), t.null]),
                effects: t.union([t.array(StageEffectIO), t.null]),
            })
        ),
        blockEdges: t.union([t.array(t.any), t.null]),
        tags: t.union([t.array(t.string), t.null]),
        effects: t.union([t.array(StageEffectIO), t.null]),
        layerRects: t.union([t.null, t.undefined]),
    }),
    tilesDisallowToLocate: t.array(t.any),
    runes: t.union([
        t.array(
            t.type({
                difficultyMask: t.union([t.string, t.number]), // legacy
                key: t.string,
                professionMask: t.union([t.string, t.number, t.undefined]), // legacy
                buildableMask: t.union([t.string, t.number]), // legacy
                blackboard: t.array(BlackboardIO),
            })
        ),
        t.null
    ]),
    globalBuffs: t.union([
        t.array(
            t.type({
                prefabKey: t.string,
                blackboard: t.union([t.array(BlackboardIO), t.null]),
                overrideCameraEffect: t.null,
                passProfessionMaskFlag: t.union([t.boolean, t.undefined]),
                professionMask: t.union([t.string, t.number, t.undefined]),
            })
        ),
        t.null
    ]),
    routes: t.array(
        t.union([
            t.type({
                motionMode: t.union([t.string, t.number]), // keep number for legacy
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
                checkpoints: t.union([
                    t.array(
                        t.type({
                            type: t.union([t.string, t.number]), // keep number for legacy
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
                        })
                    ),
                    t.null
                ]),
                allowDiagonalMove: t.boolean,
                visitEveryTileCenter: t.boolean,
                visitEveryNodeCenter: t.boolean,
                visitEveryCheckPoint: t.union([t.boolean, t.undefined]), // legacy
            }),
            t.null // legacy
        ])
    ),
    extraRoutes: t.union([t.array(t.any), t.undefined]),
    enemies: t.array(t.any),
    enemyDbRefs: t.array(
        t.type({
            useDb: t.boolean,
            id: t.string,
            level: t.number,
            overwrittenData: t.union([EnemyData, t.null]),
        })
    ),
    waves: t.array(
        t.type({
            preDelay: t.number,
            postDelay: t.number,
            maxTimeWaitingForNextWave: t.number,
            fragments: t.array(StageActionIO),
            advancedWaveTag: t.union([t.string, t.null, t.undefined]), // legacy
        })
    ),
    branches: t.union([
        t.record(
            t.string,
            t.type({
                phases: t.array(StageActionIO),
            }),
        ),
        t.null
    ]),
    predefines: t.union([StageDefinesIO, t.null]),
    hardPredefines: t.union([StageDefinesIO, t.null, t.undefined]),
    excludeCharIdList: t.null,
    randomSeed: t.number,
    operaConfig: t.union([t.string, t.null, t.undefined]),
    runtimeData: t.union([t.null, t.undefined]), // legacy
});
export const RogueRelicIO = t.type({
    id: t.string,
    name: t.string,
    description: t.union([t.string, t.null]),
    usage: t.string,
    obtainApproach: t.string,
    iconId: t.string,
    type: t.string,
    subType: t.string,
    rarity: t.string,
    value: t.number,
    sortId: t.number,
    canSacrifice: t.boolean,
    unlockCondDesc: t.union([t.string, t.null]),
});
export const RogueStageIO = t.type({
    excel: t.type({
        id: t.string,
        linkedStageId: t.string,
        levelId: t.string,
        code: t.string,
        name: t.string,
        loadingPicId: t.string,
        description: t.string,
        eliteDesc: t.union([t.string, t.null]),
        isBoss: t.number,
        isElite: t.number,
        difficulty: t.string,
        capsulePool: t.union([t.string, t.null]),
        capsuleProb: t.number,
        vutresProb: t.array(t.number),
        boxProb: t.array(t.number),
    }),
    levels: StageDataIO,
});
export const RogueVariationIO = t.type({
    id: t.string,
    type: t.string,
    outerName: t.string,
    innerName: t.string,
    functionDesc: t.string,
    desc: t.string,
    iconId: t.union([t.string, t.null]),
    sound: t.union([t.string, t.null]),
});
export const SandboxStageIO = t.type({
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
    levels: StageDataIO,
});
export const BaseIO = t.type({
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
export const CCStageIO = t.type({
    const: t.type({
        levelId: t.string,
        location: t.string,
        name: t.string,
        description: t.string,
    }),
    levels: StageDataIO,
});
export const DefinitionIO = t.type({
    termId: t.string,
    termName: t.string,
    description: t.string,
});
export const EnemyIO = t.type({
    excel: t.type({
        enemyId: t.string,
        enemyIndex: t.string,
        enemyTags: t.union([t.array(t.string), t.null]),
        sortId: t.number,
        name: t.string,
        enemyLevel: t.string,
        description: t.string,
        attackType: t.null,
        ability: t.null,
        isInvalidKilled: t.boolean,
        overrideKillCntInfos: t.record(t.string, t.any),
        hideInHandbook: t.boolean,
    }),
    levels: t.type({
        Key: t.string,
        Value: t.array(
            t.type({
                level: t.number,
                enemyData: EnemyData,
            })
        ),
    }),
});
export const GameEventIO = t.type({
    id: t.string,
    type: t.string,
    displayType: t.string,
    name: t.string,
    startTime: t.number,
    endTime: t.number,
    rewardEndTime: t.number,
    displayOnHome: t.boolean,
    hasStage: t.boolean,
    templateShopId: t.union([t.string, t.null]),
    medalGroupId: t.union([t.string, t.null]),
    isReplicate: t.boolean,
});
export const ItemIO = t.type({
    data: t.type({
        itemId: t.string,
        name: t.string,
        description: t.union([t.string, t.null]),
        rarity: t.string,
        iconId: t.string,
        overrideBkg: t.null,
        stackIconId: t.union([t.string, t.null]),
        sortId: t.number,
        usage: t.union([t.string, t.null]),
        obtainApproach: t.union([t.string, t.null]),
        classifyType: t.string,
        itemType: t.string,
        stageDropList: t.array(
            t.type({
                stageId: t.string,
                occPer: t.string,
            })
        ),
        buildingProductList: t.array(
            t.type({
                roomType: t.string,
                formulaId: t.string,
            })
        ),
    }),
    formula: t.union([ManufactFormulaIO, WorkshopFormulaIO, t.null]),
});
export const ModuleIO = t.type({
    info: t.type({
        uniEquipId: t.string,
        uniEquipName: t.string,
        uniEquipIcon: t.string,
        uniEquipDesc: t.string,
        typeIcon: t.string,
        typeName1: t.string,
        typeName2: t.union([t.string, t.null]),
        equipShiningColor: t.string,
        showEvolvePhase: t.string,
        unlockEvolvePhase: t.string,
        charId: t.string,
        tmplId: t.union([t.string, t.null]),
        showLevel: t.number,
        unlockLevel: t.number,
        unlockFavorPoint: t.number,
        missionList: t.array(t.string),
        itemCost: t.union([t.record(t.string, t.array(LevelUpCostIO)), t.null]),
        type: t.string,
        uniEquipGetTime: t.number,
        charEquipOrder: t.number,
    }),
    data: t.union([
        t.type({
            phases: t.array(
                t.type({
                    equipLevel: t.number,
                    parts: t.array(
                        t.type({
                            resKey: t.union([t.string, t.null]),
                            target: t.string,
                            isToken: t.boolean,
                            addOrOverrideTalentDataBundle: t.type({
                                candidates: t.union([
                                    t.array(
                                        t.type({
                                            displayRangeId: t.boolean,
                                            upgradeDescription: t.string,
                                            talentIndex: t.number,
                                            unlockCondition: OperatorUnlockCondIO,
                                            requiredPotentialRank: t.number,
                                            prefabKey: t.string,
                                            name: t.union([t.string, t.null]),
                                            description: t.union([t.string, t.null]),
                                            rangeId: t.union([t.string, t.null]),
                                            blackboard: t.array(BlackboardIO),
                                        })
                                    ),
                                    t.null
                                ]),
                            }),
                            overrideTraitDataBundle: t.type({
                                candidates: t.union([
                                    t.array(
                                        t.type({
                                            additionalDescription: t.union([t.string, t.null]),
                                            unlockCondition: OperatorUnlockCondIO,
                                            requiredPotentialRank: t.number,
                                            blackboard: t.array(BlackboardIO),
                                            overrideDescripton: t.union([t.string, t.null]),
                                            prefabKey: t.union([t.string, t.null]),
                                            rangeId: t.union([t.string, t.null]),
                                        })
                                    ),
                                    t.null
                                ]),
                            }),
                        })
                    ),
                    attributeBlackboard: t.array(BlackboardIO),
                    tokenAttributeBlackboard: t.record(t.string, t.array(BlackboardIO)),
                })
            ),
        }),
        t.null
    ]),
});
export const ParadoxIO = t.type({
    excel: t.type({
        charId: t.string,
        stageId: t.string,
        levelId: t.string,
        zoneId: t.string,
        code: t.string,
        name: t.string,
        loadingPicId: t.string,
        description: t.string,
        unlockParam: t.array(
            t.type({
                unlockType: t.string,
                unlockParam1: t.string,
                unlockParam2: t.string,
                unlockParam3: t.null,
            })
        ),
        rewardItem: t.array(
            t.type({
                id: t.string,
                count: t.number,
                type: t.string,
            })
        ),
        stageNameForShow: t.string,
        zoneNameForShow: t.string,
        picId: t.string,
        stageGetTime: t.number,
    }),
    levels: StageDataIO,
});
export const RogueThemeIO = t.type({
    name: t.string,
    stageDict: t.record(t.string, RogueStageIO),
    toughStageDict: t.record(t.string, RogueStageIO),
    relicDict: t.record(t.string, RogueRelicIO),
    variationDict: t.record(t.string, RogueVariationIO),
});
export const SandboxActIO = t.type({
    stageDict: t.record(t.string, SandboxStageIO),
});
export const SkillIO = t.type({
    skillId: t.string,
    iconId: t.union([t.string, t.null]),
    hidden: t.boolean,
    levels: t.array(
        t.type({
            name: t.string,
            rangeId: t.union([t.string, t.null]),
            description: t.union([t.string, t.null]),
            skillType: t.string,
            durationType: t.string,
            spData: t.type({
                spType: t.union([t.string, t.number]),
                levelUpCost: t.null,
                maxChargeTime: t.number,
                spCost: t.number,
                initSp: t.number,
                increment: t.number,
            }),
            prefabId: t.union([t.string, t.null]),
            duration: t.number,
            blackboard: t.array(BlackboardIO),
        })
    ),
});
export const SkinIO = t.type({
    skinId: t.string,
    charId: t.string,
    tokenSkinMap: t.union([
        t.array(
            t.type({
                tokenId: t.string,
                tokenSkinId: t.string,
            })
        ),
        t.null
    ]),
    illustId: t.union([t.string, t.null]),
    dynIllustId: t.union([t.string, t.null]),
    avatarId: t.string,
    portraitId: t.union([t.string, t.null]),
    dynPortraitId: t.union([t.string, t.null]),
    dynEntranceId: t.union([t.string, t.null]),
    buildingId: t.union([t.string, t.null]),
    battleSkin: t.type({
        overwritePrefab: t.boolean,
        skinOrPrefabId: t.union([t.string, t.null]),
    }),
    isBuySkin: t.boolean,
    tmplId: t.union([t.string, t.null]),
    voiceId: t.union([t.string, t.null]),
    voiceType: t.string,
    displaySkin: t.type({
        skinName: t.union([t.string, t.null]),
        colorList: t.union([t.tuple([t.string, t.string, t.string, t.string, t.string]), t.null]),
        modelName: t.union([t.string, t.null]),
        drawerList: t.union([t.array(t.string), t.null]),
        skinGroupId: t.union([t.string, t.null]),
        skinGroupName: t.union([t.string, t.null]),
        skinGroupSortIndex: t.number,
        content: t.union([t.string, t.null]),
        dialog: t.union([t.string, t.null]),
        usage: t.union([t.string, t.null]),
        description: t.union([t.string, t.null]),
        obtainApproach: t.union([t.string, t.null]),
        sortId: t.number,
        displayTagId: t.union([t.string, t.null]),
        getTime: t.number,
        onYear: t.number,
        onPeriod: t.number,
    }),
});
export const StageIO = t.type({
    excel: t.type({
        stageType: t.string,
        difficulty: t.string,
        performanceStageFlag: t.string,
        diffGroup: t.string,
        unlockCondition: t.array(
            t.union([
                t.type({
                    stageId: t.string,
                    completeState: t.string,
                }),
                t.null
            ])
        ),
        stageId: t.string,
        levelId: t.string,
        zoneId: t.string,
        code: t.string,
        name: t.string,
        description: t.string,
        hardStagedId: t.union([t.string, t.null]),
        dangerLevel: t.union([t.string, t.null]),
        dangerPoint: t.number,
        loadingPicId: t.string,
        canPractice: t.boolean,
        canBattleReplay: t.boolean,
        apCost: t.number,
        apFailReturn: t.number,
        etItemId: t.union([t.string, t.null]),
        etCost: t.number,
        etFailReturn: t.number,
        etButtonStyle: t.union([t.string, t.null]),
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
        displayMainItem: t.union([t.string, t.null]),
        hilightMark: t.boolean,
        bossMark: t.boolean,
        isPredefined: t.boolean,
        isHardPredefined: t.boolean,
        isSkillSelectablePredefined: t.boolean,
        isStoryOnly: t.boolean,
        appearanceStyle: t.string,
        stageDropInfo: t.type({
            firstPassRewards: t.null,
            firstCompleteRewards: t.null,
            passRewards: t.null,
            completeRewards: t.null,
            displayRewards: t.array(
                t.type({
                    type: t.string,
                    id: t.string,
                    dropType: t.string,
                })
            ),
            displayDetailRewards: t.array(
                t.type({
                    occPercent: t.string,
                    type: t.string,
                    id: t.string,
                    dropType: t.string,
                })
            ),
        }),
        canUseCharm: t.boolean,
        canUseTech: t.boolean,
        canUseTrapTool: t.boolean,
        canUseBattlePerformance: t.boolean,
        startButtonOverrideId: t.union([t.string, t.null]),
        isStagePatch: t.boolean,
        mainStageId: t.union([t.string, t.null]),
        extraCondition: t.union([
            t.array(
                t.type({
                    index: t.number,
                    template: t.string,
                    unlockParam: t.array(t.string),
                })
            ),
            t.null
        ]),
        extraInfo: t.union([
            t.array(
                t.type({
                    stageId: t.string,
                    rewards: t.array(
                        t.type({
                            id: t.string,
                            count: t.number,
                            type: t.string,
                        })
                    ),
                    progressInfo: t.type({
                        progressType: t.string,
                        descList: t.record(t.string, t.string),
                    })
                })
            ),
            t.null
        ])
    }),
    levels: StageDataIO,
});
export const OperatorIO = t.type({
    id: t.string,
    recruit: t.number,
    archetype: t.string,
    range: GridRangeIO,
    skills: t.array(SkillIO),
    modules: t.array(ModuleIO),
    skins: t.array(SkinIO),
    bases: t.array(
        t.type({
            condition: t.type({
                buffId: t.string,
                cond: OperatorUnlockCondIO,
            }),
            skill: BaseIO,
        })
    ),
    paradox: t.union([ParadoxIO, t.null]),
    data: t.type({
        name: t.string,
        description: t.string,
        canUseGeneralPotentialItem: t.boolean,
        potentialItemId: t.union([t.string, t.null]),
        nationId: t.union([t.string, t.null]),
        groupId: t.union([t.string, t.null]),
        teamId: t.union([t.string, t.null]),
        displayNumber: t.union([t.string, t.null]),
        // tokenKey: t.string,
        appellation: t.string,
        position: t.string,
        tagList: t.array(t.string),
        itemUsage: t.union([t.string, t.null]),
        itemDesc: t.union([t.string, t.null]),
        itemObtainApproach: t.union([t.string, t.null]),
        isNotObtainable: t.boolean,
        isSpChar: t.boolean,
        maxPotentialLevel: t.number,
        rarity: t.string,
        profession: t.string,
        subProfessionId: t.string,
        trait: t.union([
            t.type({
                candidates: t.array(
                    t.type({
                        unlockCondition: OperatorUnlockCondIO,
                        requiredPotentialRank: t.number,
                        blackboard: t.array(BlackboardIO),
                        overrideDescripton: t.union([t.string, t.null]),
                        prefabKey: t.union([t.string, t.null]),
                        rangeId: t.union([t.string, t.null]),
                    })
                ),
            }),
            t.null
        ]),
        phases: t.array(
            t.type({
                characterPrefabKey: t.string,
                rangeId: t.string,
                maxLevel: t.number,
                attributesKeyFrames: t.array(AttributesKeyFrameIO),
                evolveCost: t.union([t.array(LevelUpCostIO), t.null]),
            })
        ),
        skills: t.array(
            t.type({
                skillId: t.string,
                overridePrefabKey: t.union([t.string, t.null]),
                overrideTokenKey: t.union([t.string, t.null]),
                levelUpCostCond: t.array(LevelUpCostCondIO),
                unlockCond: OperatorUnlockCondIO,
            })
        ),
        talents: t.union([
            t.array(
                t.type({
                    candidates: t.array(
                        t.type({
                            unlockCondition: OperatorUnlockCondIO,
                            requiredPotentialRank: t.number,
                            prefabKey: t.string,
                            name: t.string,
                            description: t.string,
                            rangeId: t.union([t.string, t.null]),
                            blackboard: t.array(BlackboardIO),
                        })
                    ),
                })
            ),
            t.null
        ]),
        potentialRanks: t.array(
            t.type({
                type: t.string,
                description: t.string,
                buff: t.union([
                    t.type({
                        attributes: t.type({
                            abnormalFlags: t.null,
                            abnormalImmunes: t.null,
                            abnormalAntis: t.null,
                            abnormalCombos: t.null,
                            abnormalComboImmunes: t.null,
                            attributeModifiers: t.array(
                                t.type({
                                    attributeType: t.string,
                                    formulaItem: t.string,
                                    value: t.number,
                                    loadFromBlackboard: t.boolean,
                                    fetchBaseValueFromSourceEntity: t.boolean,
                                })
                            ),
                        }),
                    }),
                    t.null
                ]),
                equivalentCost: t.null,
            })
        ),
        favorKeyFrames: t.array(AttributesKeyFrameIO),
        allSkillLvlup: t.array(
            t.type({
                unlockCond: OperatorUnlockCondIO,
                lvlUpCost: t.union([t.array(LevelUpCostIO), t.null]),
            })
        ),
    }),
});
export type AttributesKeyFrame = t.TypeOf<typeof AttributesKeyFrameIO>;
export type Blackboard = t.TypeOf<typeof BlackboardIO>;
export type Base = t.TypeOf<typeof BaseIO>;
export type CCStage = t.TypeOf<typeof CCStageIO>;
export type Definition = t.TypeOf<typeof DefinitionIO>;
export type Enemy = t.TypeOf<typeof EnemyIO>;
export type EnemyAttributes = t.TypeOf<typeof EnemyAttributesIO>;
export type EnemySkills = t.TypeOf<typeof EnemySkillsIO>;
export type EnemySpData = t.TypeOf<typeof EnemySpDataIO>;
export type GameEvent = t.TypeOf<typeof GameEventIO>;
export type GridRange = t.TypeOf<typeof GridRangeIO>;
export type ManufactFormula = t.TypeOf<typeof ManufactFormulaIO>;
export type WorkshopFormula = t.TypeOf<typeof WorkshopFormulaIO>;
export type Item = t.TypeOf<typeof ItemIO>;
export type LevelUpCost = t.TypeOf<typeof LevelUpCostIO>;
export type LevelUpCostCond = t.TypeOf<typeof LevelUpCostCondIO>;
export type Module = t.TypeOf<typeof ModuleIO>;
export type Operator = t.TypeOf<typeof OperatorIO>;
export type OperatorUnlockCond = t.TypeOf<typeof OperatorUnlockCondIO>;
export type Paradox = t.TypeOf<typeof ParadoxIO>;
export type RogueTheme = t.TypeOf<typeof RogueThemeIO>;
export type RogueRelic = t.TypeOf<typeof RogueRelicIO>;
export type RogueStage = t.TypeOf<typeof RogueStageIO>;
export type RogueVariation = t.TypeOf<typeof RogueVariationIO>;
export type SandboxAct = t.TypeOf<typeof SandboxActIO>;
export type SandboxStage = t.TypeOf<typeof SandboxStageIO>;
export type Skill = t.TypeOf<typeof SkillIO>;
export type Skin = t.TypeOf<typeof SkinIO>;
export type Stage = t.TypeOf<typeof StageIO>;
export type StageData = t.TypeOf<typeof StageDataIO>;
export type StageEffect = t.TypeOf<typeof StageEffectIO>;
export type StageDefines = t.TypeOf<typeof StageDefinesIO>;