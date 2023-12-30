import * as t from 'io-ts';

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
    value: t.union([t.number, t.undefined]),
    valueStr: t.union([t.string, t.undefined]),
});
export const EnemyAttributesIO = t.type({
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
export const EnemySkillsIO = t.type({
    prefabKey: t.string,
    priority: t.number,
    cooldown: t.number,
    initCooldown: t.number,
    spCost: t.number,
    blackboard: t.array(BlackboardIO),
});
export const EnemySpDataIO = t.type({
    spType: t.number,
    maxSp: t.number,
    initSp: t.number,
    increment: t.number,
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
    phase: t.string,
    level: t.number,
});
export const LevelUpCostCondIO = t.type({
    unlockCond: OperatorUnlockCondIO,
    lvlUpTime: t.number,
    levelUpCost: t.array(LevelUpCostIO),
});
export const StageDefinesIO = t.type({
    characterInsts: t.array(t.any),
    tokenInsts: t.array(
        t.type({
            position: t.type({
                row: t.number,
                col: t.number,
            }),
            direction: t.number,
            hidden: t.boolean,
            alias: t.string,
            uniEquipIds: t.array(
                t.type({
                    key: t.string,
                    level: t.number,
                })
            ),
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
            overrideSkillBlackboard: t.array(BlackboardIO),
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
    direction: t.number,
});
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
        isHardTrainingLevel: t.boolean,
        functionDisableMask: t.number,
    }),
    levelId: t.string,
    mapId: t.string,
    bgmEvent: t.string,
    environmentSe: t.string,
    mapData: t.type({
        map: t.array(t.array(t.number)),
        tiles: t.array(
            t.type({
                tileKey: t.string,
                heightType: t.number,
                buildableType: t.number,
                passableMask: t.number,
                playerSideMask: t.number,
                blackboard: BlackboardIO,
                effects: t.array(StageEffectIO),
            })
        ),
        blockEdges: t.null,
        tags: t.array(t.string),
        effects: t.array(StageEffectIO),
        layerRects: t.array(t.string),
        width: t.number,
        height: t.number,
    }),
    tilesDisallowToLocate: t.array(t.any),
    runes: t.array(
        t.type({
            difficultyMask: t.number,
            key: t.string,
            professionMask: t.number,
            buildableMask: t.number,
            blackboard: t.array(BlackboardIO),
        })
    ),
    globalBuffs: t.array(
        t.type({
            prefabKey: t.string,
            blackboard: t.array(BlackboardIO),
            overrideCameraEffect: t.null,
            passProfessionMaskFlag: t.boolean,
            professionMask: t.number,
        })
    ),
    routes: t.array(
        t.type({
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
            checkpoints: t.array(
                t.type({
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
                })
            ),
            allowDiagonalMove: t.boolean,
            visitEveryTileCenter: t.boolean,
            visitEveryNodeCenter: t.boolean,
            visitEveryCheckPoint: t.boolean,
        })
    ),
    extraRoutes: t.array(t.any),
    enemies: t.array(t.any),
    enemyDbRefs: t.array(
        t.type({
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
                attributes: EnemyAttributesIO,
                lifePointReduce: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                rangeRadius: t.type({
                    m_defined: t.boolean,
                    m_value: t.number,
                }),
                talentBlackboard: t.array(BlackboardIO),
                skills: t.array(EnemySkillsIO),
                spData: EnemySpDataIO,
            }),
        })
    ),
    waves: t.array(
        t.type({
            preDelay: t.number,
            postDelay: t.number,
            maxTimeWaitingForNextWave: t.number,
            fragments: t.array(
                t.type({
                    preDelay: t.number,
                    actions: t.array(
                        t.type({
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
                        })
                    ),
                    name: t.string,
                })
            ),
        })
    ),
    branches: t.type({
        frosts: t.type({
            phases: t.array(
                t.type({
                    preDelay: t.number,
                    actions: t.array(
                        t.type({
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
                        })
                    ),
                })
            ),
        }),
    }),
    predefines: StageDefinesIO,
    hardPredefines: StageDefinesIO,
    excludeCharIdList: t.null,
    randomSeed: t.number,
    operaConfig: t.string,
});
export const RogueRelicIO = t.type({
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
export const RogueStageIO = t.type({
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
    levels: StageDataIO,
});
export const RogueVariationIO = t.type({
    id: t.string,
    type: t.string,
    outerName: t.string,
    innerName: t.string,
    functionDesc: t.string,
    desc: t.string,
    iconId: t.string,
    sound: t.string,
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
        Value: t.array(
            t.type({
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
                    attributes: EnemyAttributesIO,
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
                    talentBlackboard: t.array(BlackboardIO),
                    skills: t.array(EnemySkillsIO),
                    spData: EnemySpDataIO,
                }),
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
    templateShopId: t.string,
    medalGroupId: t.string,
    isReplicate: t.boolean,
});
export const ItemIO = t.type({
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
    formula: t.union([ManufactFormulaIO, WorkshopFormulaIO]),
});
export const ModuleIO = t.type({
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
        itemCost: t.record(t.string, t.array(LevelUpCostIO)),
        type: t.string,
        uniEquipGetTime: t.number,
        charEquipOrder: t.number,
    }),
    data: t.type({
        phases: t.array(
            t.type({
                equipLevel: t.number,
                parts: t.array(
                    t.type({
                        resKey: t.string,
                        target: t.string,
                        isToken: t.boolean,
                        addOrOverrideTalentDataBundle: t.type({
                            candidates: t.array(
                                t.type({
                                    displayRangeId: t.boolean,
                                    upgradeDescription: t.string,
                                    talentIndex: t.number,
                                    unlockCondition: OperatorUnlockCondIO,
                                    requiredPotentialRank: t.number,
                                    prefabKey: t.string,
                                    name: t.string,
                                    description: t.string,
                                    rangeId: t.string,
                                    blackboard: t.array(BlackboardIO),
                                })
                            ),
                        }),
                        overrideTraitDataBundle: t.type({
                            candidates: t.array(
                                t.type({
                                    additionalDescription: t.string,
                                    unlockCondition: OperatorUnlockCondIO,
                                    requiredPotentialRank: t.number,
                                    blackboard: t.array(BlackboardIO),
                                    overrideDescripton: t.string,
                                    prefabKey: t.string,
                                    rangeId: t.string,
                                })
                            ),
                        }),
                    })
                ),
                attributeBlackboard: t.array(BlackboardIO),
                tokenAttributeBlackboard: t.record(t.string, t.array(BlackboardIO)),
            })
        ),
    }),
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
                unlockType: t.number,
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
    iconId: t.string,
    hidden: t.boolean,
    levels: t.array(
        t.type({
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
            blackboard: t.array(BlackboardIO),
        })
    ),
});
export const SkinIO = t.type({
    skinId: t.string,
    charId: t.string,
    tokenSkinMap: t.array(
        t.type({
            tokenId: t.string,
            tokenSkinId: t.string,
        })
    ),
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
export const StageIO = t.type({
    excel: t.type({
        stageType: t.string,
        difficulty: t.string,
        performanceStageFlag: t.string,
        diffGroup: t.string,
        unlockCondition: t.array(
            t.type({
                stageId: t.string,
                completeState: t.number,
            })
        ),
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
            displayRewards: t.array(
                t.type({
                    type: t.string,
                    id: t.string,
                    dropType: t.string,
                })
            ),
            displayDetailRewards: t.array(
                t.type({
                    occPercent: t.number,
                    type: t.string,
                    id: t.string,
                    dropType: t.string,
                })
            ),
        }),
        startButtonOverrideId: t.string,
        isStagePatch: t.boolean,
        mainStageId: t.string,
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
    paradox: ParadoxIO,
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
            candidates: t.array(
                t.type({
                    unlockCondition: OperatorUnlockCondIO,
                    requiredPotentialRank: t.number,
                    blackboard: t.array(BlackboardIO),
                    overrideDescripton: t.string,
                    prefabKey: t.string,
                    rangeId: t.string,
                })
            ),
        }),
        phases: t.array(
            t.type({
                characterPrefabKey: t.string,
                rangeId: t.string,
                maxLevel: t.number,
                attributesKeyFrames: t.array(AttributesKeyFrameIO),
                evolveCost: t.array(LevelUpCostIO),
            })
        ),
        skills: t.array(
            t.type({
                skillId: t.string,
                overridePrefabKey: t.string,
                overrideTokenKey: t.string,
                levelUpCostCond: t.array(LevelUpCostCondIO),
                unlockCond: OperatorUnlockCondIO,
            })
        ),
        talents: t.array(
            t.type({
                candidates: t.array(
                    t.type({
                        unlockCondition: OperatorUnlockCondIO,
                        requiredPotentialRank: t.number,
                        prefabKey: t.string,
                        name: t.string,
                        description: t.string,
                        rangeId: t.string,
                        blackboard: t.array(BlackboardIO),
                    })
                ),
            })
        ),
        potentialRanks: t.array(
            t.type({
                type: t.number,
                description: t.string,
                buff: t.type({
                    attributes: t.type({
                        abnormalFlags: t.null,
                        abnormalImmunes: t.null,
                        abnormalAntis: t.null,
                        abnormalCombos: t.null,
                        abnormalComboImmunes: t.null,
                        attributeModifiers: t.array(
                            t.type({
                                attributeType: t.number,
                                formulaItem: t.number,
                                value: t.number,
                                loadFromBlackboard: t.boolean,
                                fetchBaseValueFromSourceEntity: t.boolean,
                            })
                        ),
                    }),
                }),
                equivalentCost: t.null,
            })
        ),
        favorKeyFrames: t.array(AttributesKeyFrameIO),
        allSkillLvlup: t.array(
            t.type({
                unlockCond: OperatorUnlockCondIO,
                lvlUpCost: t.array(LevelUpCostIO),
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