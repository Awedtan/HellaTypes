import * as t from 'io-ts';
export declare const AttributesKeyFrameIO: t.TypeC<{
    level: t.NumberC;
    data: t.TypeC<{
        maxHp: t.NumberC;
        atk: t.NumberC;
        def: t.NumberC;
        magicResistance: t.NumberC;
        cost: t.NumberC;
        blockCnt: t.NumberC;
        moveSpeed: t.NumberC;
        attackSpeed: t.NumberC;
        baseAttackTime: t.NumberC;
        respawnTime: t.NumberC;
        hpRecoveryPerSec: t.NumberC;
        spRecoveryPerSec: t.NumberC;
        maxDeployCount: t.NumberC;
        maxDeckStackCnt: t.NumberC;
        tauntLevel: t.NumberC;
        massLevel: t.NumberC;
        baseForceLevel: t.NumberC;
        stunImmune: t.BooleanC;
        silenceImmune: t.BooleanC;
        sleepImmune: t.BooleanC;
        frozenImmune: t.BooleanC;
        levitateImmune: t.BooleanC;
    }>;
}>;
export declare const BlackboardIO: t.TypeC<{
    key: t.StringC;
    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
}>;
export declare const EnemyAttributesIO: t.TypeC<{
    maxHp: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    atk: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    def: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    magicResistance: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    cost: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    blockCnt: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    moveSpeed: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    attackSpeed: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    baseAttackTime: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    respawnTime: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    hpRecoveryPerSec: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    spRecoveryPerSec: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    maxDeployCount: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    massLevel: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    baseForceLevel: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    tauntLevel: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.NumberC;
    }>;
    stunImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    silenceImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    sleepImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    frozenImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    levitateImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
}>;
export declare const EnemySkillsIO: t.TypeC<{
    prefabKey: t.StringC;
    priority: t.NumberC;
    cooldown: t.NumberC;
    initCooldown: t.NumberC;
    spCost: t.NumberC;
    blackboard: t.ArrayC<t.TypeC<{
        key: t.StringC;
        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
    }>>;
}>;
export declare const EnemySpDataIO: t.TypeC<{
    spType: t.NumberC;
    maxSp: t.NumberC;
    initSp: t.NumberC;
    increment: t.NumberC;
}>;
export declare const GridRangeIO: t.TypeC<{
    id: t.StringC;
    direction: t.NumberC;
    grids: t.ArrayC<t.TypeC<{
        row: t.NumberC;
        col: t.NumberC;
    }>>;
}>;
export declare const LevelUpCostIO: t.TypeC<{
    id: t.StringC;
    count: t.NumberC;
    type: t.StringC;
}>;
export declare const ManufactFormulaIO: t.TypeC<{
    formulaId: t.StringC;
    itemId: t.StringC;
    count: t.NumberC;
    weight: t.NumberC;
    costPoint: t.NumberC;
    formulaType: t.StringC;
    buffType: t.StringC;
    costs: t.ArrayC<t.TypeC<{
        id: t.StringC;
        count: t.NumberC;
        type: t.StringC;
    }>>;
    requireRooms: t.ArrayC<t.TypeC<{
        roomId: t.StringC;
        roomLevel: t.NumberC;
        roomCount: t.NumberC;
    }>>;
    requireStages: t.ArrayC<t.TypeC<{
        stageId: t.StringC;
        rank: t.NumberC;
    }>>;
}>;
export declare const WorkshopFormulaIO: t.TypeC<{
    sortId: t.NumberC;
    formulaId: t.StringC;
    rarity: t.NumberC;
    itemId: t.StringC;
    count: t.NumberC;
    goldCost: t.NumberC;
    apCost: t.NumberC;
    formulaType: t.StringC;
    buffType: t.StringC;
    extraOutcomeRate: t.NumberC;
    extraOutcomeGroup: t.ArrayC<t.TypeC<{
        weight: t.NumberC;
        itemId: t.StringC;
        itemCount: t.NumberC;
    }>>;
    costs: t.ArrayC<t.TypeC<{
        id: t.StringC;
        count: t.NumberC;
        type: t.StringC;
    }>>;
    requireRooms: t.ArrayC<t.TypeC<{
        roomId: t.StringC;
        roomLevel: t.NumberC;
        roomCount: t.NumberC;
    }>>;
    requireStages: t.ArrayC<t.TypeC<{
        stageId: t.StringC;
        rank: t.NumberC;
    }>>;
}>;
export declare const OperatorUnlockCondIO: t.TypeC<{
    phase: t.StringC;
    level: t.NumberC;
}>;
export declare const LevelUpCostCondIO: t.TypeC<{
    unlockCond: t.TypeC<{
        phase: t.StringC;
        level: t.NumberC;
    }>;
    lvlUpTime: t.NumberC;
    levelUpCost: t.ArrayC<t.TypeC<{
        id: t.StringC;
        count: t.NumberC;
        type: t.StringC;
    }>>;
}>;
export declare const StageDefinesIO: t.TypeC<{
    characterInsts: t.ArrayC<t.AnyC>;
    tokenInsts: t.ArrayC<t.TypeC<{
        position: t.TypeC<{
            row: t.NumberC;
            col: t.NumberC;
        }>;
        direction: t.NumberC;
        hidden: t.BooleanC;
        alias: t.StringC;
        uniEquipIds: t.ArrayC<t.TypeC<{
            key: t.StringC;
            level: t.NumberC;
        }>>;
        inst: t.TypeC<{
            characterKey: t.StringC;
            level: t.NumberC;
            phase: t.NumberC;
            favorPoint: t.NumberC;
            potentialRank: t.NumberC;
        }>;
        skillIndex: t.NumberC;
        mainSkillLvl: t.NumberC;
        skinId: t.StringC;
        tmplId: t.StringC;
        overrideSkillBlackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>;
    }>>;
    characterCards: t.ArrayC<t.AnyC>;
    tokenCards: t.ArrayC<t.AnyC>;
}>;
export declare const StageEffectIO: t.TypeC<{
    key: t.StringC;
    offset: t.TypeC<{
        x: t.NumberC;
        y: t.NumberC;
        z: t.NumberC;
    }>;
    direction: t.NumberC;
}>;
export declare const StageDataIO: t.TypeC<{
    options: t.TypeC<{
        characterLimit: t.NumberC;
        maxLifePoint: t.NumberC;
        initialCost: t.NumberC;
        maxCost: t.NumberC;
        costIncreaseTime: t.NumberC;
        moveMultiplier: t.NumberC;
        steeringEnabled: t.BooleanC;
        isTrainingLevel: t.BooleanC;
        isHardTrainingLevel: t.BooleanC;
        functionDisableMask: t.NumberC;
    }>;
    levelId: t.StringC;
    mapId: t.StringC;
    bgmEvent: t.StringC;
    environmentSe: t.StringC;
    mapData: t.TypeC<{
        map: t.ArrayC<t.ArrayC<t.NumberC>>;
        tiles: t.ArrayC<t.TypeC<{
            tileKey: t.StringC;
            heightType: t.NumberC;
            buildableType: t.NumberC;
            passableMask: t.NumberC;
            playerSideMask: t.NumberC;
            blackboard: t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
        }>>;
        blockEdges: t.NullC;
        tags: t.ArrayC<t.StringC>;
        effects: t.ArrayC<t.TypeC<{
            key: t.StringC;
            offset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
                z: t.NumberC;
            }>;
            direction: t.NumberC;
        }>>;
        layerRects: t.ArrayC<t.StringC>;
        width: t.NumberC;
        height: t.NumberC;
    }>;
    tilesDisallowToLocate: t.ArrayC<t.AnyC>;
    runes: t.ArrayC<t.TypeC<{
        difficultyMask: t.NumberC;
        key: t.StringC;
        professionMask: t.NumberC;
        buildableMask: t.NumberC;
        blackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>;
    }>>;
    globalBuffs: t.ArrayC<t.TypeC<{
        prefabKey: t.StringC;
        blackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>;
        overrideCameraEffect: t.NullC;
        passProfessionMaskFlag: t.BooleanC;
        professionMask: t.NumberC;
    }>>;
    routes: t.ArrayC<t.TypeC<{
        motionMode: t.NumberC;
        startPosition: t.TypeC<{
            row: t.NumberC;
            col: t.NumberC;
        }>;
        endPosition: t.TypeC<{
            row: t.NumberC;
            col: t.NumberC;
        }>;
        spawnRandomRange: t.TypeC<{
            x: t.NumberC;
            y: t.NumberC;
        }>;
        spawnOffset: t.TypeC<{
            x: t.NumberC;
            y: t.NumberC;
        }>;
        checkpoints: t.ArrayC<t.TypeC<{
            type: t.NumberC;
            time: t.NumberC;
            position: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            reachOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            randomizeReachOffset: t.BooleanC;
            reachDistance: t.NumberC;
        }>>;
        allowDiagonalMove: t.BooleanC;
        visitEveryTileCenter: t.BooleanC;
        visitEveryNodeCenter: t.BooleanC;
        visitEveryCheckPoint: t.BooleanC;
    }>>;
    extraRoutes: t.ArrayC<t.AnyC>;
    enemies: t.ArrayC<t.AnyC>;
    enemyDbRefs: t.ArrayC<t.TypeC<{
        useDb: t.BooleanC;
        id: t.StringC;
        level: t.NumberC;
        overwrittenData: t.TypeC<{
            name: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.NumberC;
            }>;
            description: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.NumberC;
            }>;
            prefabKey: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.NumberC;
            }>;
            attributes: t.TypeC<{
                maxHp: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                atk: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                def: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                magicResistance: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                cost: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                blockCnt: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                moveSpeed: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attackSpeed: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                baseAttackTime: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                respawnTime: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                hpRecoveryPerSec: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                spRecoveryPerSec: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                maxDeployCount: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                massLevel: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                baseForceLevel: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                tauntLevel: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                stunImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                silenceImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                sleepImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                frozenImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                levitateImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
            }>;
            lifePointReduce: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.NumberC;
            }>;
            rangeRadius: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.NumberC;
            }>;
            talentBlackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            skills: t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                priority: t.NumberC;
                cooldown: t.NumberC;
                initCooldown: t.NumberC;
                spCost: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            spData: t.TypeC<{
                spType: t.NumberC;
                maxSp: t.NumberC;
                initSp: t.NumberC;
                increment: t.NumberC;
            }>;
        }>;
    }>>;
    waves: t.ArrayC<t.TypeC<{
        preDelay: t.NumberC;
        postDelay: t.NumberC;
        maxTimeWaitingForNextWave: t.NumberC;
        fragments: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            actions: t.ArrayC<t.TypeC<{
                actionType: t.NumberC;
                managedByScheduler: t.BooleanC;
                key: t.StringC;
                count: t.NumberC;
                preDelay: t.NumberC;
                interval: t.NumberC;
                routeIndex: t.NumberC;
                blockFragment: t.BooleanC;
                autoPreviewRoute: t.BooleanC;
                isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                hiddenGroup: t.StringC;
                randomSpawnGroupKey: t.StringC;
                weight: t.NumberC;
                dontBlockWave: t.BooleanC;
            }>>;
            name: t.StringC;
        }>>;
    }>>;
    branches: t.TypeC<{
        frosts: t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    weightValue: t.NumberC;
                }>>;
            }>>;
        }>;
    }>;
    predefines: t.TypeC<{
        characterInsts: t.ArrayC<t.AnyC>;
        tokenInsts: t.ArrayC<t.TypeC<{
            position: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            direction: t.NumberC;
            hidden: t.BooleanC;
            alias: t.StringC;
            uniEquipIds: t.ArrayC<t.TypeC<{
                key: t.StringC;
                level: t.NumberC;
            }>>;
            inst: t.TypeC<{
                characterKey: t.StringC;
                level: t.NumberC;
                phase: t.NumberC;
                favorPoint: t.NumberC;
                potentialRank: t.NumberC;
            }>;
            skillIndex: t.NumberC;
            mainSkillLvl: t.NumberC;
            skinId: t.StringC;
            tmplId: t.StringC;
            overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        characterCards: t.ArrayC<t.AnyC>;
        tokenCards: t.ArrayC<t.AnyC>;
    }>;
    hardPredefines: t.TypeC<{
        characterInsts: t.ArrayC<t.AnyC>;
        tokenInsts: t.ArrayC<t.TypeC<{
            position: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            direction: t.NumberC;
            hidden: t.BooleanC;
            alias: t.StringC;
            uniEquipIds: t.ArrayC<t.TypeC<{
                key: t.StringC;
                level: t.NumberC;
            }>>;
            inst: t.TypeC<{
                characterKey: t.StringC;
                level: t.NumberC;
                phase: t.NumberC;
                favorPoint: t.NumberC;
                potentialRank: t.NumberC;
            }>;
            skillIndex: t.NumberC;
            mainSkillLvl: t.NumberC;
            skinId: t.StringC;
            tmplId: t.StringC;
            overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        characterCards: t.ArrayC<t.AnyC>;
        tokenCards: t.ArrayC<t.AnyC>;
    }>;
    excludeCharIdList: t.NullC;
    randomSeed: t.NumberC;
    operaConfig: t.StringC;
}>;
export declare const RogueRelicIO: t.TypeC<{
    id: t.StringC;
    name: t.StringC;
    description: t.StringC;
    usage: t.StringC;
    obtainApproach: t.StringC;
    iconId: t.StringC;
    type: t.StringC;
    subType: t.StringC;
    rarity: t.StringC;
    value: t.NumberC;
    sortId: t.NumberC;
    canSacrifice: t.BooleanC;
    unlockCondDesc: t.StringC;
}>;
export declare const RogueStageIO: t.TypeC<{
    excel: t.TypeC<{
        id: t.StringC;
        linkedStageId: t.StringC;
        levelId: t.StringC;
        code: t.StringC;
        name: t.StringC;
        loadingPicId: t.StringC;
        description: t.StringC;
        eliteDesc: t.StringC;
        isBoss: t.NumberC;
        isElite: t.NumberC;
        difficulty: t.StringC;
        capsulePool: t.StringC;
        capsuleProb: t.NumberC;
        vutresProb: t.ArrayC<t.NumberC>;
        boxProb: t.ArrayC<t.NumberC>;
    }>;
    levels: t.TypeC<{
        options: t.TypeC<{
            characterLimit: t.NumberC;
            maxLifePoint: t.NumberC;
            initialCost: t.NumberC;
            maxCost: t.NumberC;
            costIncreaseTime: t.NumberC;
            moveMultiplier: t.NumberC;
            steeringEnabled: t.BooleanC;
            isTrainingLevel: t.BooleanC;
            isHardTrainingLevel: t.BooleanC;
            functionDisableMask: t.NumberC;
        }>;
        levelId: t.StringC;
        mapId: t.StringC;
        bgmEvent: t.StringC;
        environmentSe: t.StringC;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.NumberC;
                buildableType: t.NumberC;
                passableMask: t.NumberC;
                playerSideMask: t.NumberC;
                blackboard: t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
            }>>;
            blockEdges: t.NullC;
            tags: t.ArrayC<t.StringC>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
            layerRects: t.ArrayC<t.StringC>;
            width: t.NumberC;
            height: t.NumberC;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.ArrayC<t.TypeC<{
            difficultyMask: t.NumberC;
            key: t.StringC;
            professionMask: t.NumberC;
            buildableMask: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        globalBuffs: t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.BooleanC;
            professionMask: t.NumberC;
        }>>;
        routes: t.ArrayC<t.TypeC<{
            motionMode: t.NumberC;
            startPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            endPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            spawnRandomRange: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            spawnOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            checkpoints: t.ArrayC<t.TypeC<{
                type: t.NumberC;
                time: t.NumberC;
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                reachOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                randomizeReachOffset: t.BooleanC;
                reachDistance: t.NumberC;
            }>>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.BooleanC;
        }>>;
        extraRoutes: t.ArrayC<t.AnyC>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    dontBlockWave: t.BooleanC;
                }>>;
                name: t.StringC;
            }>>;
        }>>;
        branches: t.TypeC<{
            frosts: t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        weightValue: t.NumberC;
                    }>>;
                }>>;
            }>;
        }>;
        predefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        hardPredefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.StringC;
    }>;
}>;
export declare const RogueVariationIO: t.TypeC<{
    id: t.StringC;
    type: t.StringC;
    outerName: t.StringC;
    innerName: t.StringC;
    functionDesc: t.StringC;
    desc: t.StringC;
    iconId: t.StringC;
    sound: t.StringC;
}>;
export declare const SandboxStageIO: t.TypeC<{
    excel: t.TypeC<{
        stageId: t.StringC;
        levelId: t.StringC;
        code: t.StringC;
        name: t.StringC;
        loadingPicId: t.StringC;
        description: t.StringC;
        actionCost: t.NumberC;
        powerCost: t.NumberC;
    }>;
    levels: t.TypeC<{
        options: t.TypeC<{
            characterLimit: t.NumberC;
            maxLifePoint: t.NumberC;
            initialCost: t.NumberC;
            maxCost: t.NumberC;
            costIncreaseTime: t.NumberC;
            moveMultiplier: t.NumberC;
            steeringEnabled: t.BooleanC;
            isTrainingLevel: t.BooleanC;
            isHardTrainingLevel: t.BooleanC;
            functionDisableMask: t.NumberC;
        }>;
        levelId: t.StringC;
        mapId: t.StringC;
        bgmEvent: t.StringC;
        environmentSe: t.StringC;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.NumberC;
                buildableType: t.NumberC;
                passableMask: t.NumberC;
                playerSideMask: t.NumberC;
                blackboard: t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
            }>>;
            blockEdges: t.NullC;
            tags: t.ArrayC<t.StringC>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
            layerRects: t.ArrayC<t.StringC>;
            width: t.NumberC;
            height: t.NumberC;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.ArrayC<t.TypeC<{
            difficultyMask: t.NumberC;
            key: t.StringC;
            professionMask: t.NumberC;
            buildableMask: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        globalBuffs: t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.BooleanC;
            professionMask: t.NumberC;
        }>>;
        routes: t.ArrayC<t.TypeC<{
            motionMode: t.NumberC;
            startPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            endPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            spawnRandomRange: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            spawnOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            checkpoints: t.ArrayC<t.TypeC<{
                type: t.NumberC;
                time: t.NumberC;
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                reachOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                randomizeReachOffset: t.BooleanC;
                reachDistance: t.NumberC;
            }>>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.BooleanC;
        }>>;
        extraRoutes: t.ArrayC<t.AnyC>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    dontBlockWave: t.BooleanC;
                }>>;
                name: t.StringC;
            }>>;
        }>>;
        branches: t.TypeC<{
            frosts: t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        weightValue: t.NumberC;
                    }>>;
                }>>;
            }>;
        }>;
        predefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        hardPredefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.StringC;
    }>;
}>;
export declare const BaseIO: t.TypeC<{
    buffId: t.StringC;
    buffName: t.StringC;
    buffIcon: t.StringC;
    skillIcon: t.StringC;
    sortId: t.NumberC;
    buffColor: t.StringC;
    textColor: t.StringC;
    buffCategory: t.StringC;
    roomType: t.StringC;
    description: t.StringC;
}>;
export declare const CCStageIO: t.TypeC<{
    const: t.TypeC<{
        levelId: t.StringC;
        location: t.StringC;
        name: t.StringC;
        description: t.StringC;
    }>;
    levels: t.TypeC<{
        options: t.TypeC<{
            characterLimit: t.NumberC;
            maxLifePoint: t.NumberC;
            initialCost: t.NumberC;
            maxCost: t.NumberC;
            costIncreaseTime: t.NumberC;
            moveMultiplier: t.NumberC;
            steeringEnabled: t.BooleanC;
            isTrainingLevel: t.BooleanC;
            isHardTrainingLevel: t.BooleanC;
            functionDisableMask: t.NumberC;
        }>;
        levelId: t.StringC;
        mapId: t.StringC;
        bgmEvent: t.StringC;
        environmentSe: t.StringC;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.NumberC;
                buildableType: t.NumberC;
                passableMask: t.NumberC;
                playerSideMask: t.NumberC;
                blackboard: t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
            }>>;
            blockEdges: t.NullC;
            tags: t.ArrayC<t.StringC>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
            layerRects: t.ArrayC<t.StringC>;
            width: t.NumberC;
            height: t.NumberC;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.ArrayC<t.TypeC<{
            difficultyMask: t.NumberC;
            key: t.StringC;
            professionMask: t.NumberC;
            buildableMask: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        globalBuffs: t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.BooleanC;
            professionMask: t.NumberC;
        }>>;
        routes: t.ArrayC<t.TypeC<{
            motionMode: t.NumberC;
            startPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            endPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            spawnRandomRange: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            spawnOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            checkpoints: t.ArrayC<t.TypeC<{
                type: t.NumberC;
                time: t.NumberC;
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                reachOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                randomizeReachOffset: t.BooleanC;
                reachDistance: t.NumberC;
            }>>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.BooleanC;
        }>>;
        extraRoutes: t.ArrayC<t.AnyC>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    dontBlockWave: t.BooleanC;
                }>>;
                name: t.StringC;
            }>>;
        }>>;
        branches: t.TypeC<{
            frosts: t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        weightValue: t.NumberC;
                    }>>;
                }>>;
            }>;
        }>;
        predefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        hardPredefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.StringC;
    }>;
}>;
export declare const DefinitionIO: t.TypeC<{
    termId: t.StringC;
    termName: t.StringC;
    description: t.StringC;
}>;
export declare const EnemyIO: t.TypeC<{
    excel: t.TypeC<{
        enemyId: t.StringC;
        enemyIndex: t.StringC;
        enemyTags: t.ArrayC<t.StringC>;
        sortId: t.NumberC;
        name: t.StringC;
        enemyRace: t.StringC;
        enemyLevel: t.StringC;
        description: t.StringC;
        attackType: t.StringC;
        endure: t.StringC;
        attack: t.StringC;
        defence: t.StringC;
        resistance: t.StringC;
        ability: t.StringC;
        isInvalidKilled: t.BooleanC;
        overrideKillCntInfos: t.RecordC<t.StringC, t.AnyC>;
        hideInHandbook: t.BooleanC;
    }>;
    levels: t.TypeC<{
        Key: t.StringC;
        Value: t.ArrayC<t.TypeC<{
            level: t.NumberC;
            enemyData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.StringC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.StringC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.StringC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                levelType: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                numOfExtraDrops: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
    }>;
}>;
export declare const GameEventIO: t.TypeC<{
    id: t.StringC;
    type: t.StringC;
    displayType: t.StringC;
    name: t.StringC;
    startTime: t.NumberC;
    endTime: t.NumberC;
    rewardEndTime: t.NumberC;
    displayOnHome: t.BooleanC;
    hasStage: t.BooleanC;
    templateShopId: t.StringC;
    medalGroupId: t.StringC;
    isReplicate: t.BooleanC;
}>;
export declare const ItemIO: t.TypeC<{
    data: t.TypeC<{
        itemId: t.StringC;
        name: t.StringC;
        description: t.StringC;
        rarity: t.NumberC;
        iconId: t.StringC;
        overrideBkg: t.NullC;
        stackIconId: t.StringC;
        sortId: t.NumberC;
        usage: t.StringC;
        obtainApproach: t.StringC;
        classifyType: t.StringC;
        itemType: t.StringC;
        stageDropList: t.ArrayC<t.TypeC<{
            stageId: t.StringC;
            occPer: t.StringC;
        }>>;
        buildingProductList: t.ArrayC<t.TypeC<{
            roomType: t.StringC;
            formulaId: t.StringC;
        }>>;
    }>;
    formula: t.UnionC<[t.TypeC<{
        formulaId: t.StringC;
        itemId: t.StringC;
        count: t.NumberC;
        weight: t.NumberC;
        costPoint: t.NumberC;
        formulaType: t.StringC;
        buffType: t.StringC;
        costs: t.ArrayC<t.TypeC<{
            id: t.StringC;
            count: t.NumberC;
            type: t.StringC;
        }>>;
        requireRooms: t.ArrayC<t.TypeC<{
            roomId: t.StringC;
            roomLevel: t.NumberC;
            roomCount: t.NumberC;
        }>>;
        requireStages: t.ArrayC<t.TypeC<{
            stageId: t.StringC;
            rank: t.NumberC;
        }>>;
    }>, t.TypeC<{
        sortId: t.NumberC;
        formulaId: t.StringC;
        rarity: t.NumberC;
        itemId: t.StringC;
        count: t.NumberC;
        goldCost: t.NumberC;
        apCost: t.NumberC;
        formulaType: t.StringC;
        buffType: t.StringC;
        extraOutcomeRate: t.NumberC;
        extraOutcomeGroup: t.ArrayC<t.TypeC<{
            weight: t.NumberC;
            itemId: t.StringC;
            itemCount: t.NumberC;
        }>>;
        costs: t.ArrayC<t.TypeC<{
            id: t.StringC;
            count: t.NumberC;
            type: t.StringC;
        }>>;
        requireRooms: t.ArrayC<t.TypeC<{
            roomId: t.StringC;
            roomLevel: t.NumberC;
            roomCount: t.NumberC;
        }>>;
        requireStages: t.ArrayC<t.TypeC<{
            stageId: t.StringC;
            rank: t.NumberC;
        }>>;
    }>]>;
}>;
export declare const ModuleIO: t.TypeC<{
    info: t.TypeC<{
        uniEquipId: t.StringC;
        uniEquipName: t.StringC;
        uniEquipIcon: t.StringC;
        uniEquipDesc: t.StringC;
        typeIcon: t.StringC;
        typeName1: t.StringC;
        typeName2: t.StringC;
        equipShiningColor: t.StringC;
        showEvolvePhase: t.NumberC;
        unlockEvolvePhase: t.NumberC;
        charId: t.StringC;
        tmplId: t.StringC;
        showLevel: t.NumberC;
        unlockLevel: t.NumberC;
        unlockFavorPoint: t.NumberC;
        missionList: t.ArrayC<t.StringC>;
        itemCost: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
            id: t.StringC;
            count: t.NumberC;
            type: t.StringC;
        }>>>;
        type: t.StringC;
        uniEquipGetTime: t.NumberC;
        charEquipOrder: t.NumberC;
    }>;
    data: t.TypeC<{
        phases: t.ArrayC<t.TypeC<{
            equipLevel: t.NumberC;
            parts: t.ArrayC<t.TypeC<{
                resKey: t.StringC;
                target: t.StringC;
                isToken: t.BooleanC;
                addOrOverrideTalentDataBundle: t.TypeC<{
                    candidates: t.ArrayC<t.TypeC<{
                        displayRangeId: t.BooleanC;
                        upgradeDescription: t.StringC;
                        talentIndex: t.NumberC;
                        unlockCondition: t.TypeC<{
                            phase: t.StringC;
                            level: t.NumberC;
                        }>;
                        requiredPotentialRank: t.NumberC;
                        prefabKey: t.StringC;
                        name: t.StringC;
                        description: t.StringC;
                        rangeId: t.StringC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                    }>>;
                }>;
                overrideTraitDataBundle: t.TypeC<{
                    candidates: t.ArrayC<t.TypeC<{
                        additionalDescription: t.StringC;
                        unlockCondition: t.TypeC<{
                            phase: t.StringC;
                            level: t.NumberC;
                        }>;
                        requiredPotentialRank: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                        overrideDescripton: t.StringC;
                        prefabKey: t.StringC;
                        rangeId: t.StringC;
                    }>>;
                }>;
            }>>;
            attributeBlackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            tokenAttributeBlackboard: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>>;
        }>>;
    }>;
}>;
export declare const ParadoxIO: t.TypeC<{
    excel: t.TypeC<{
        charId: t.StringC;
        stageId: t.StringC;
        levelId: t.StringC;
        zoneId: t.StringC;
        code: t.StringC;
        name: t.StringC;
        loadingPicId: t.StringC;
        description: t.StringC;
        unlockParam: t.ArrayC<t.TypeC<{
            unlockType: t.NumberC;
            unlockParam1: t.StringC;
            unlockParam2: t.StringC;
            unlockParam3: t.NullC;
        }>>;
        rewardItem: t.ArrayC<t.TypeC<{
            id: t.StringC;
            count: t.NumberC;
            type: t.StringC;
        }>>;
        stageNameForShow: t.StringC;
        zoneNameForShow: t.StringC;
        picId: t.StringC;
        stageGetTime: t.NumberC;
    }>;
    levels: t.TypeC<{
        options: t.TypeC<{
            characterLimit: t.NumberC;
            maxLifePoint: t.NumberC;
            initialCost: t.NumberC;
            maxCost: t.NumberC;
            costIncreaseTime: t.NumberC;
            moveMultiplier: t.NumberC;
            steeringEnabled: t.BooleanC;
            isTrainingLevel: t.BooleanC;
            isHardTrainingLevel: t.BooleanC;
            functionDisableMask: t.NumberC;
        }>;
        levelId: t.StringC;
        mapId: t.StringC;
        bgmEvent: t.StringC;
        environmentSe: t.StringC;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.NumberC;
                buildableType: t.NumberC;
                passableMask: t.NumberC;
                playerSideMask: t.NumberC;
                blackboard: t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
            }>>;
            blockEdges: t.NullC;
            tags: t.ArrayC<t.StringC>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
            layerRects: t.ArrayC<t.StringC>;
            width: t.NumberC;
            height: t.NumberC;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.ArrayC<t.TypeC<{
            difficultyMask: t.NumberC;
            key: t.StringC;
            professionMask: t.NumberC;
            buildableMask: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        globalBuffs: t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.BooleanC;
            professionMask: t.NumberC;
        }>>;
        routes: t.ArrayC<t.TypeC<{
            motionMode: t.NumberC;
            startPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            endPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            spawnRandomRange: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            spawnOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            checkpoints: t.ArrayC<t.TypeC<{
                type: t.NumberC;
                time: t.NumberC;
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                reachOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                randomizeReachOffset: t.BooleanC;
                reachDistance: t.NumberC;
            }>>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.BooleanC;
        }>>;
        extraRoutes: t.ArrayC<t.AnyC>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    dontBlockWave: t.BooleanC;
                }>>;
                name: t.StringC;
            }>>;
        }>>;
        branches: t.TypeC<{
            frosts: t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        weightValue: t.NumberC;
                    }>>;
                }>>;
            }>;
        }>;
        predefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        hardPredefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.StringC;
    }>;
}>;
export declare const RogueThemeIO: t.TypeC<{
    name: t.StringC;
    stageDict: t.RecordC<t.StringC, t.TypeC<{
        excel: t.TypeC<{
            id: t.StringC;
            linkedStageId: t.StringC;
            levelId: t.StringC;
            code: t.StringC;
            name: t.StringC;
            loadingPicId: t.StringC;
            description: t.StringC;
            eliteDesc: t.StringC;
            isBoss: t.NumberC;
            isElite: t.NumberC;
            difficulty: t.StringC;
            capsulePool: t.StringC;
            capsuleProb: t.NumberC;
            vutresProb: t.ArrayC<t.NumberC>;
            boxProb: t.ArrayC<t.NumberC>;
        }>;
        levels: t.TypeC<{
            options: t.TypeC<{
                characterLimit: t.NumberC;
                maxLifePoint: t.NumberC;
                initialCost: t.NumberC;
                maxCost: t.NumberC;
                costIncreaseTime: t.NumberC;
                moveMultiplier: t.NumberC;
                steeringEnabled: t.BooleanC;
                isTrainingLevel: t.BooleanC;
                isHardTrainingLevel: t.BooleanC;
                functionDisableMask: t.NumberC;
            }>;
            levelId: t.StringC;
            mapId: t.StringC;
            bgmEvent: t.StringC;
            environmentSe: t.StringC;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.NumberC;
                    buildableType: t.NumberC;
                    passableMask: t.NumberC;
                    playerSideMask: t.NumberC;
                    blackboard: t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>;
                    effects: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.NumberC;
                    }>>;
                }>>;
                blockEdges: t.NullC;
                tags: t.ArrayC<t.StringC>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
                layerRects: t.ArrayC<t.StringC>;
                width: t.NumberC;
                height: t.NumberC;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.ArrayC<t.TypeC<{
                difficultyMask: t.NumberC;
                key: t.StringC;
                professionMask: t.NumberC;
                buildableMask: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            globalBuffs: t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.BooleanC;
                professionMask: t.NumberC;
            }>>;
            routes: t.ArrayC<t.TypeC<{
                motionMode: t.NumberC;
                startPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                endPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                spawnRandomRange: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                spawnOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                checkpoints: t.ArrayC<t.TypeC<{
                    type: t.NumberC;
                    time: t.NumberC;
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    reachOffset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                    }>;
                    randomizeReachOffset: t.BooleanC;
                    reachDistance: t.NumberC;
                }>>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.BooleanC;
            }>>;
            extraRoutes: t.ArrayC<t.AnyC>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        tauntLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        frozenImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        levitateImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                    }>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    talentBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                    skills: t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                    }>>;
                    spData: t.TypeC<{
                        spType: t.NumberC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>;
                }>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        dontBlockWave: t.BooleanC;
                    }>>;
                    name: t.StringC;
                }>>;
            }>>;
            branches: t.TypeC<{
                frosts: t.TypeC<{
                    phases: t.ArrayC<t.TypeC<{
                        preDelay: t.NumberC;
                        actions: t.ArrayC<t.TypeC<{
                            actionType: t.NumberC;
                            managedByScheduler: t.BooleanC;
                            key: t.StringC;
                            count: t.NumberC;
                            preDelay: t.NumberC;
                            interval: t.NumberC;
                            routeIndex: t.NumberC;
                            blockFragment: t.BooleanC;
                            autoPreviewRoute: t.BooleanC;
                            isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                            hiddenGroup: t.StringC;
                            randomSpawnGroupKey: t.StringC;
                            weight: t.NumberC;
                            weightValue: t.NumberC;
                        }>>;
                    }>>;
                }>;
            }>;
            predefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            hardPredefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.StringC;
        }>;
    }>>;
    toughStageDict: t.RecordC<t.StringC, t.TypeC<{
        excel: t.TypeC<{
            id: t.StringC;
            linkedStageId: t.StringC;
            levelId: t.StringC;
            code: t.StringC;
            name: t.StringC;
            loadingPicId: t.StringC;
            description: t.StringC;
            eliteDesc: t.StringC;
            isBoss: t.NumberC;
            isElite: t.NumberC;
            difficulty: t.StringC;
            capsulePool: t.StringC;
            capsuleProb: t.NumberC;
            vutresProb: t.ArrayC<t.NumberC>;
            boxProb: t.ArrayC<t.NumberC>;
        }>;
        levels: t.TypeC<{
            options: t.TypeC<{
                characterLimit: t.NumberC;
                maxLifePoint: t.NumberC;
                initialCost: t.NumberC;
                maxCost: t.NumberC;
                costIncreaseTime: t.NumberC;
                moveMultiplier: t.NumberC;
                steeringEnabled: t.BooleanC;
                isTrainingLevel: t.BooleanC;
                isHardTrainingLevel: t.BooleanC;
                functionDisableMask: t.NumberC;
            }>;
            levelId: t.StringC;
            mapId: t.StringC;
            bgmEvent: t.StringC;
            environmentSe: t.StringC;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.NumberC;
                    buildableType: t.NumberC;
                    passableMask: t.NumberC;
                    playerSideMask: t.NumberC;
                    blackboard: t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>;
                    effects: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.NumberC;
                    }>>;
                }>>;
                blockEdges: t.NullC;
                tags: t.ArrayC<t.StringC>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
                layerRects: t.ArrayC<t.StringC>;
                width: t.NumberC;
                height: t.NumberC;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.ArrayC<t.TypeC<{
                difficultyMask: t.NumberC;
                key: t.StringC;
                professionMask: t.NumberC;
                buildableMask: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            globalBuffs: t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.BooleanC;
                professionMask: t.NumberC;
            }>>;
            routes: t.ArrayC<t.TypeC<{
                motionMode: t.NumberC;
                startPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                endPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                spawnRandomRange: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                spawnOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                checkpoints: t.ArrayC<t.TypeC<{
                    type: t.NumberC;
                    time: t.NumberC;
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    reachOffset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                    }>;
                    randomizeReachOffset: t.BooleanC;
                    reachDistance: t.NumberC;
                }>>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.BooleanC;
            }>>;
            extraRoutes: t.ArrayC<t.AnyC>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        tauntLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        frozenImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        levitateImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                    }>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    talentBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                    skills: t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                    }>>;
                    spData: t.TypeC<{
                        spType: t.NumberC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>;
                }>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        dontBlockWave: t.BooleanC;
                    }>>;
                    name: t.StringC;
                }>>;
            }>>;
            branches: t.TypeC<{
                frosts: t.TypeC<{
                    phases: t.ArrayC<t.TypeC<{
                        preDelay: t.NumberC;
                        actions: t.ArrayC<t.TypeC<{
                            actionType: t.NumberC;
                            managedByScheduler: t.BooleanC;
                            key: t.StringC;
                            count: t.NumberC;
                            preDelay: t.NumberC;
                            interval: t.NumberC;
                            routeIndex: t.NumberC;
                            blockFragment: t.BooleanC;
                            autoPreviewRoute: t.BooleanC;
                            isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                            hiddenGroup: t.StringC;
                            randomSpawnGroupKey: t.StringC;
                            weight: t.NumberC;
                            weightValue: t.NumberC;
                        }>>;
                    }>>;
                }>;
            }>;
            predefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            hardPredefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.StringC;
        }>;
    }>>;
    relicDict: t.RecordC<t.StringC, t.TypeC<{
        id: t.StringC;
        name: t.StringC;
        description: t.StringC;
        usage: t.StringC;
        obtainApproach: t.StringC;
        iconId: t.StringC;
        type: t.StringC;
        subType: t.StringC;
        rarity: t.StringC;
        value: t.NumberC;
        sortId: t.NumberC;
        canSacrifice: t.BooleanC;
        unlockCondDesc: t.StringC;
    }>>;
    variationDict: t.RecordC<t.StringC, t.TypeC<{
        id: t.StringC;
        type: t.StringC;
        outerName: t.StringC;
        innerName: t.StringC;
        functionDesc: t.StringC;
        desc: t.StringC;
        iconId: t.StringC;
        sound: t.StringC;
    }>>;
}>;
export declare const SandboxActIO: t.TypeC<{
    stageDict: t.RecordC<t.StringC, t.TypeC<{
        excel: t.TypeC<{
            stageId: t.StringC;
            levelId: t.StringC;
            code: t.StringC;
            name: t.StringC;
            loadingPicId: t.StringC;
            description: t.StringC;
            actionCost: t.NumberC;
            powerCost: t.NumberC;
        }>;
        levels: t.TypeC<{
            options: t.TypeC<{
                characterLimit: t.NumberC;
                maxLifePoint: t.NumberC;
                initialCost: t.NumberC;
                maxCost: t.NumberC;
                costIncreaseTime: t.NumberC;
                moveMultiplier: t.NumberC;
                steeringEnabled: t.BooleanC;
                isTrainingLevel: t.BooleanC;
                isHardTrainingLevel: t.BooleanC;
                functionDisableMask: t.NumberC;
            }>;
            levelId: t.StringC;
            mapId: t.StringC;
            bgmEvent: t.StringC;
            environmentSe: t.StringC;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.NumberC;
                    buildableType: t.NumberC;
                    passableMask: t.NumberC;
                    playerSideMask: t.NumberC;
                    blackboard: t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>;
                    effects: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.NumberC;
                    }>>;
                }>>;
                blockEdges: t.NullC;
                tags: t.ArrayC<t.StringC>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
                layerRects: t.ArrayC<t.StringC>;
                width: t.NumberC;
                height: t.NumberC;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.ArrayC<t.TypeC<{
                difficultyMask: t.NumberC;
                key: t.StringC;
                professionMask: t.NumberC;
                buildableMask: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            globalBuffs: t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.BooleanC;
                professionMask: t.NumberC;
            }>>;
            routes: t.ArrayC<t.TypeC<{
                motionMode: t.NumberC;
                startPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                endPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                spawnRandomRange: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                spawnOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                checkpoints: t.ArrayC<t.TypeC<{
                    type: t.NumberC;
                    time: t.NumberC;
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    reachOffset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                    }>;
                    randomizeReachOffset: t.BooleanC;
                    reachDistance: t.NumberC;
                }>>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.BooleanC;
            }>>;
            extraRoutes: t.ArrayC<t.AnyC>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        tauntLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        frozenImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        levitateImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                    }>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    talentBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                    skills: t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                    }>>;
                    spData: t.TypeC<{
                        spType: t.NumberC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>;
                }>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        dontBlockWave: t.BooleanC;
                    }>>;
                    name: t.StringC;
                }>>;
            }>>;
            branches: t.TypeC<{
                frosts: t.TypeC<{
                    phases: t.ArrayC<t.TypeC<{
                        preDelay: t.NumberC;
                        actions: t.ArrayC<t.TypeC<{
                            actionType: t.NumberC;
                            managedByScheduler: t.BooleanC;
                            key: t.StringC;
                            count: t.NumberC;
                            preDelay: t.NumberC;
                            interval: t.NumberC;
                            routeIndex: t.NumberC;
                            blockFragment: t.BooleanC;
                            autoPreviewRoute: t.BooleanC;
                            isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                            hiddenGroup: t.StringC;
                            randomSpawnGroupKey: t.StringC;
                            weight: t.NumberC;
                            weightValue: t.NumberC;
                        }>>;
                    }>>;
                }>;
            }>;
            predefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            hardPredefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.StringC;
        }>;
    }>>;
}>;
export declare const SkillIO: t.TypeC<{
    skillId: t.StringC;
    iconId: t.StringC;
    hidden: t.BooleanC;
    levels: t.ArrayC<t.TypeC<{
        name: t.StringC;
        rangeId: t.StringC;
        description: t.StringC;
        skillType: t.StringC;
        durationType: t.NumberC;
        spData: t.TypeC<{
            spType: t.StringC;
            levelUpCost: t.NullC;
            maxChargeTime: t.NumberC;
            spCost: t.NumberC;
            initSp: t.NumberC;
            increment: t.NumberC;
        }>;
        prefabId: t.StringC;
        duration: t.NumberC;
        blackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>;
    }>>;
}>;
export declare const SkinIO: t.TypeC<{
    skinId: t.StringC;
    charId: t.StringC;
    tokenSkinMap: t.ArrayC<t.TypeC<{
        tokenId: t.StringC;
        tokenSkinId: t.StringC;
    }>>;
    illustId: t.StringC;
    dynIllustId: t.StringC;
    avatarId: t.StringC;
    portraitId: t.StringC;
    dynPortraitId: t.StringC;
    dynEntranceId: t.StringC;
    buildingId: t.StringC;
    battleSkin: t.TypeC<{
        overwritePrefab: t.BooleanC;
        skinOrPrefabId: t.StringC;
    }>;
    isBuySkin: t.BooleanC;
    tmplId: t.StringC;
    voiceId: t.StringC;
    voiceType: t.StringC;
    displaySkin: t.TypeC<{
        skinName: t.StringC;
        colorList: t.TupleC<[t.StringC, t.StringC, t.StringC, t.StringC, t.StringC]>;
        titleList: t.TupleC<[t.StringC, t.StringC]>;
        modelName: t.StringC;
        drawerList: t.ArrayC<t.StringC>;
        skinGroupId: t.StringC;
        skinGroupName: t.StringC;
        skinGroupSortIndex: t.NumberC;
        content: t.StringC;
        dialog: t.StringC;
        usage: t.StringC;
        description: t.StringC;
        obtainApproach: t.StringC;
        sortId: t.NumberC;
        displayTagId: t.StringC;
        getTime: t.NumberC;
        onYear: t.NumberC;
        onPeriod: t.NumberC;
    }>;
}>;
export declare const StageIO: t.TypeC<{
    excel: t.TypeC<{
        stageType: t.StringC;
        difficulty: t.StringC;
        performanceStageFlag: t.StringC;
        diffGroup: t.StringC;
        unlockCondition: t.ArrayC<t.TypeC<{
            stageId: t.StringC;
            completeState: t.NumberC;
        }>>;
        stageId: t.StringC;
        levelId: t.StringC;
        zoneId: t.StringC;
        code: t.StringC;
        name: t.StringC;
        description: t.StringC;
        hardStagedId: t.StringC;
        dangerLevel: t.StringC;
        dangerPoint: t.NumberC;
        loadingPicId: t.StringC;
        canPractice: t.BooleanC;
        canBattleReplay: t.BooleanC;
        apCost: t.NumberC;
        apFailReturn: t.NumberC;
        etItemId: t.StringC;
        etCost: t.NumberC;
        etFailReturn: t.NumberC;
        etButtonStyle: t.StringC;
        apProtectTimes: t.NumberC;
        diamondOnceDrop: t.NumberC;
        practiceTicketCost: t.NumberC;
        dailyStageDifficulty: t.NumberC;
        expGain: t.NumberC;
        goldGain: t.NumberC;
        loseExpGain: t.NumberC;
        loseGoldGain: t.NumberC;
        passFavor: t.NumberC;
        completeFavor: t.NumberC;
        slProgress: t.NumberC;
        displayMainItem: t.StringC;
        hilightMark: t.BooleanC;
        bossMark: t.BooleanC;
        isPredefined: t.BooleanC;
        isHardPredefined: t.BooleanC;
        isSkillSelectablePredefined: t.BooleanC;
        isStoryOnly: t.BooleanC;
        appearanceStyle: t.NumberC;
        stageDropInfo: t.TypeC<{
            firstPassRewards: t.NullC;
            firstCompleteRewards: t.NullC;
            passRewards: t.NullC;
            completeRewards: t.NullC;
            displayRewards: t.ArrayC<t.TypeC<{
                type: t.StringC;
                id: t.StringC;
                dropType: t.StringC;
            }>>;
            displayDetailRewards: t.ArrayC<t.TypeC<{
                occPercent: t.NumberC;
                type: t.StringC;
                id: t.StringC;
                dropType: t.StringC;
            }>>;
        }>;
        startButtonOverrideId: t.StringC;
        isStagePatch: t.BooleanC;
        mainStageId: t.StringC;
    }>;
    levels: t.TypeC<{
        options: t.TypeC<{
            characterLimit: t.NumberC;
            maxLifePoint: t.NumberC;
            initialCost: t.NumberC;
            maxCost: t.NumberC;
            costIncreaseTime: t.NumberC;
            moveMultiplier: t.NumberC;
            steeringEnabled: t.BooleanC;
            isTrainingLevel: t.BooleanC;
            isHardTrainingLevel: t.BooleanC;
            functionDisableMask: t.NumberC;
        }>;
        levelId: t.StringC;
        mapId: t.StringC;
        bgmEvent: t.StringC;
        environmentSe: t.StringC;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.NumberC;
                buildableType: t.NumberC;
                passableMask: t.NumberC;
                playerSideMask: t.NumberC;
                blackboard: t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
            }>>;
            blockEdges: t.NullC;
            tags: t.ArrayC<t.StringC>;
            effects: t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.NumberC;
            }>>;
            layerRects: t.ArrayC<t.StringC>;
            width: t.NumberC;
            height: t.NumberC;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.ArrayC<t.TypeC<{
            difficultyMask: t.NumberC;
            key: t.StringC;
            professionMask: t.NumberC;
            buildableMask: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
        globalBuffs: t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.BooleanC;
            professionMask: t.NumberC;
        }>>;
        routes: t.ArrayC<t.TypeC<{
            motionMode: t.NumberC;
            startPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            endPosition: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            spawnRandomRange: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            spawnOffset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
            }>;
            checkpoints: t.ArrayC<t.TypeC<{
                type: t.NumberC;
                time: t.NumberC;
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                reachOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                randomizeReachOffset: t.BooleanC;
                reachDistance: t.NumberC;
            }>>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.BooleanC;
        }>>;
        extraRoutes: t.ArrayC<t.AnyC>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    tauntLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    frozenImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    levitateImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                }>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.NumberC;
                }>;
                talentBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                skills: t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                spData: t.TypeC<{
                    spType: t.NumberC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>;
            }>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.NumberC;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.StringC;
                    randomSpawnGroupKey: t.StringC;
                    weight: t.NumberC;
                    dontBlockWave: t.BooleanC;
                }>>;
                name: t.StringC;
            }>>;
        }>>;
        branches: t.TypeC<{
            frosts: t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        weightValue: t.NumberC;
                    }>>;
                }>>;
            }>;
        }>;
        predefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        hardPredefines: t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.NumberC;
                hidden: t.BooleanC;
                alias: t.StringC;
                uniEquipIds: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.NumberC;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.StringC;
                tmplId: t.StringC;
                overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.StringC;
    }>;
}>;
export declare const OperatorIO: t.TypeC<{
    id: t.StringC;
    recruit: t.NumberC;
    archetype: t.StringC;
    range: t.TypeC<{
        id: t.StringC;
        direction: t.NumberC;
        grids: t.ArrayC<t.TypeC<{
            row: t.NumberC;
            col: t.NumberC;
        }>>;
    }>;
    skills: t.ArrayC<t.TypeC<{
        skillId: t.StringC;
        iconId: t.StringC;
        hidden: t.BooleanC;
        levels: t.ArrayC<t.TypeC<{
            name: t.StringC;
            rangeId: t.StringC;
            description: t.StringC;
            skillType: t.StringC;
            durationType: t.NumberC;
            spData: t.TypeC<{
                spType: t.StringC;
                levelUpCost: t.NullC;
                maxChargeTime: t.NumberC;
                spCost: t.NumberC;
                initSp: t.NumberC;
                increment: t.NumberC;
            }>;
            prefabId: t.StringC;
            duration: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>;
        }>>;
    }>>;
    modules: t.ArrayC<t.TypeC<{
        info: t.TypeC<{
            uniEquipId: t.StringC;
            uniEquipName: t.StringC;
            uniEquipIcon: t.StringC;
            uniEquipDesc: t.StringC;
            typeIcon: t.StringC;
            typeName1: t.StringC;
            typeName2: t.StringC;
            equipShiningColor: t.StringC;
            showEvolvePhase: t.NumberC;
            unlockEvolvePhase: t.NumberC;
            charId: t.StringC;
            tmplId: t.StringC;
            showLevel: t.NumberC;
            unlockLevel: t.NumberC;
            unlockFavorPoint: t.NumberC;
            missionList: t.ArrayC<t.StringC>;
            itemCost: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>>;
            type: t.StringC;
            uniEquipGetTime: t.NumberC;
            charEquipOrder: t.NumberC;
        }>;
        data: t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                equipLevel: t.NumberC;
                parts: t.ArrayC<t.TypeC<{
                    resKey: t.StringC;
                    target: t.StringC;
                    isToken: t.BooleanC;
                    addOrOverrideTalentDataBundle: t.TypeC<{
                        candidates: t.ArrayC<t.TypeC<{
                            displayRangeId: t.BooleanC;
                            upgradeDescription: t.StringC;
                            talentIndex: t.NumberC;
                            unlockCondition: t.TypeC<{
                                phase: t.StringC;
                                level: t.NumberC;
                            }>;
                            requiredPotentialRank: t.NumberC;
                            prefabKey: t.StringC;
                            name: t.StringC;
                            description: t.StringC;
                            rangeId: t.StringC;
                            blackboard: t.ArrayC<t.TypeC<{
                                key: t.StringC;
                                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                            }>>;
                        }>>;
                    }>;
                    overrideTraitDataBundle: t.TypeC<{
                        candidates: t.ArrayC<t.TypeC<{
                            additionalDescription: t.StringC;
                            unlockCondition: t.TypeC<{
                                phase: t.StringC;
                                level: t.NumberC;
                            }>;
                            requiredPotentialRank: t.NumberC;
                            blackboard: t.ArrayC<t.TypeC<{
                                key: t.StringC;
                                value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                                valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                            }>>;
                            overrideDescripton: t.StringC;
                            prefabKey: t.StringC;
                            rangeId: t.StringC;
                        }>>;
                    }>;
                }>>;
                attributeBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                tokenAttributeBlackboard: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>>;
            }>>;
        }>;
    }>>;
    skins: t.ArrayC<t.TypeC<{
        skinId: t.StringC;
        charId: t.StringC;
        tokenSkinMap: t.ArrayC<t.TypeC<{
            tokenId: t.StringC;
            tokenSkinId: t.StringC;
        }>>;
        illustId: t.StringC;
        dynIllustId: t.StringC;
        avatarId: t.StringC;
        portraitId: t.StringC;
        dynPortraitId: t.StringC;
        dynEntranceId: t.StringC;
        buildingId: t.StringC;
        battleSkin: t.TypeC<{
            overwritePrefab: t.BooleanC;
            skinOrPrefabId: t.StringC;
        }>;
        isBuySkin: t.BooleanC;
        tmplId: t.StringC;
        voiceId: t.StringC;
        voiceType: t.StringC;
        displaySkin: t.TypeC<{
            skinName: t.StringC;
            colorList: t.TupleC<[t.StringC, t.StringC, t.StringC, t.StringC, t.StringC]>;
            titleList: t.TupleC<[t.StringC, t.StringC]>;
            modelName: t.StringC;
            drawerList: t.ArrayC<t.StringC>;
            skinGroupId: t.StringC;
            skinGroupName: t.StringC;
            skinGroupSortIndex: t.NumberC;
            content: t.StringC;
            dialog: t.StringC;
            usage: t.StringC;
            description: t.StringC;
            obtainApproach: t.StringC;
            sortId: t.NumberC;
            displayTagId: t.StringC;
            getTime: t.NumberC;
            onYear: t.NumberC;
            onPeriod: t.NumberC;
        }>;
    }>>;
    bases: t.ArrayC<t.TypeC<{
        condition: t.TypeC<{
            buffId: t.StringC;
            cond: t.TypeC<{
                phase: t.StringC;
                level: t.NumberC;
            }>;
        }>;
        skill: t.TypeC<{
            buffId: t.StringC;
            buffName: t.StringC;
            buffIcon: t.StringC;
            skillIcon: t.StringC;
            sortId: t.NumberC;
            buffColor: t.StringC;
            textColor: t.StringC;
            buffCategory: t.StringC;
            roomType: t.StringC;
            description: t.StringC;
        }>;
    }>>;
    paradox: t.TypeC<{
        excel: t.TypeC<{
            charId: t.StringC;
            stageId: t.StringC;
            levelId: t.StringC;
            zoneId: t.StringC;
            code: t.StringC;
            name: t.StringC;
            loadingPicId: t.StringC;
            description: t.StringC;
            unlockParam: t.ArrayC<t.TypeC<{
                unlockType: t.NumberC;
                unlockParam1: t.StringC;
                unlockParam2: t.StringC;
                unlockParam3: t.NullC;
            }>>;
            rewardItem: t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>;
            stageNameForShow: t.StringC;
            zoneNameForShow: t.StringC;
            picId: t.StringC;
            stageGetTime: t.NumberC;
        }>;
        levels: t.TypeC<{
            options: t.TypeC<{
                characterLimit: t.NumberC;
                maxLifePoint: t.NumberC;
                initialCost: t.NumberC;
                maxCost: t.NumberC;
                costIncreaseTime: t.NumberC;
                moveMultiplier: t.NumberC;
                steeringEnabled: t.BooleanC;
                isTrainingLevel: t.BooleanC;
                isHardTrainingLevel: t.BooleanC;
                functionDisableMask: t.NumberC;
            }>;
            levelId: t.StringC;
            mapId: t.StringC;
            bgmEvent: t.StringC;
            environmentSe: t.StringC;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.NumberC;
                    buildableType: t.NumberC;
                    passableMask: t.NumberC;
                    playerSideMask: t.NumberC;
                    blackboard: t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>;
                    effects: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.NumberC;
                    }>>;
                }>>;
                blockEdges: t.NullC;
                tags: t.ArrayC<t.StringC>;
                effects: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.NumberC;
                }>>;
                layerRects: t.ArrayC<t.StringC>;
                width: t.NumberC;
                height: t.NumberC;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.ArrayC<t.TypeC<{
                difficultyMask: t.NumberC;
                key: t.StringC;
                professionMask: t.NumberC;
                buildableMask: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
            globalBuffs: t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.BooleanC;
                professionMask: t.NumberC;
            }>>;
            routes: t.ArrayC<t.TypeC<{
                motionMode: t.NumberC;
                startPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                endPosition: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                spawnRandomRange: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                spawnOffset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                }>;
                checkpoints: t.ArrayC<t.TypeC<{
                    type: t.NumberC;
                    time: t.NumberC;
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    reachOffset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                    }>;
                    randomizeReachOffset: t.BooleanC;
                    reachDistance: t.NumberC;
                }>>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.BooleanC;
            }>>;
            extraRoutes: t.ArrayC<t.AnyC>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        tauntLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.NumberC;
                        }>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        frozenImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        levitateImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                    }>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.NumberC;
                    }>;
                    talentBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                    skills: t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                            valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                        }>>;
                    }>>;
                    spData: t.TypeC<{
                        spType: t.NumberC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>;
                }>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.NumberC;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.StringC;
                        randomSpawnGroupKey: t.StringC;
                        weight: t.NumberC;
                        dontBlockWave: t.BooleanC;
                    }>>;
                    name: t.StringC;
                }>>;
            }>>;
            branches: t.TypeC<{
                frosts: t.TypeC<{
                    phases: t.ArrayC<t.TypeC<{
                        preDelay: t.NumberC;
                        actions: t.ArrayC<t.TypeC<{
                            actionType: t.NumberC;
                            managedByScheduler: t.BooleanC;
                            key: t.StringC;
                            count: t.NumberC;
                            preDelay: t.NumberC;
                            interval: t.NumberC;
                            routeIndex: t.NumberC;
                            blockFragment: t.BooleanC;
                            autoPreviewRoute: t.BooleanC;
                            isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                            hiddenGroup: t.StringC;
                            randomSpawnGroupKey: t.StringC;
                            weight: t.NumberC;
                            weightValue: t.NumberC;
                        }>>;
                    }>>;
                }>;
            }>;
            predefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            hardPredefines: t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.NumberC;
                    hidden: t.BooleanC;
                    alias: t.StringC;
                    uniEquipIds: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.NumberC;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.StringC;
                    tmplId: t.StringC;
                    overrideSkillBlackboard: t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                    }>>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.StringC;
        }>;
    }>;
    data: t.TypeC<{
        name: t.StringC;
        description: t.StringC;
        canUseGeneralPotentialItem: t.BooleanC;
        potentialItemId: t.StringC;
        nationId: t.StringC;
        groupId: t.StringC;
        teamId: t.StringC;
        displayNumber: t.StringC;
        tokenKey: t.StringC;
        appellation: t.StringC;
        position: t.StringC;
        tagList: t.ArrayC<t.StringC>;
        itemUsage: t.StringC;
        itemDesc: t.StringC;
        itemObtainApproach: t.StringC;
        isNotObtainable: t.BooleanC;
        isSpChar: t.BooleanC;
        maxPotentialLevel: t.NumberC;
        rarity: t.StringC;
        profession: t.StringC;
        subProfessionId: t.StringC;
        trait: t.TypeC<{
            candidates: t.ArrayC<t.TypeC<{
                unlockCondition: t.TypeC<{
                    phase: t.StringC;
                    level: t.NumberC;
                }>;
                requiredPotentialRank: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
                overrideDescripton: t.StringC;
                prefabKey: t.StringC;
                rangeId: t.StringC;
            }>>;
        }>;
        phases: t.ArrayC<t.TypeC<{
            characterPrefabKey: t.StringC;
            rangeId: t.StringC;
            maxLevel: t.NumberC;
            attributesKeyFrames: t.ArrayC<t.TypeC<{
                level: t.NumberC;
                data: t.TypeC<{
                    maxHp: t.NumberC;
                    atk: t.NumberC;
                    def: t.NumberC;
                    magicResistance: t.NumberC;
                    cost: t.NumberC;
                    blockCnt: t.NumberC;
                    moveSpeed: t.NumberC;
                    attackSpeed: t.NumberC;
                    baseAttackTime: t.NumberC;
                    respawnTime: t.NumberC;
                    hpRecoveryPerSec: t.NumberC;
                    spRecoveryPerSec: t.NumberC;
                    maxDeployCount: t.NumberC;
                    maxDeckStackCnt: t.NumberC;
                    tauntLevel: t.NumberC;
                    massLevel: t.NumberC;
                    baseForceLevel: t.NumberC;
                    stunImmune: t.BooleanC;
                    silenceImmune: t.BooleanC;
                    sleepImmune: t.BooleanC;
                    frozenImmune: t.BooleanC;
                    levitateImmune: t.BooleanC;
                }>;
            }>>;
            evolveCost: t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>;
        }>>;
        skills: t.ArrayC<t.TypeC<{
            skillId: t.StringC;
            overridePrefabKey: t.StringC;
            overrideTokenKey: t.StringC;
            levelUpCostCond: t.ArrayC<t.TypeC<{
                unlockCond: t.TypeC<{
                    phase: t.StringC;
                    level: t.NumberC;
                }>;
                lvlUpTime: t.NumberC;
                levelUpCost: t.ArrayC<t.TypeC<{
                    id: t.StringC;
                    count: t.NumberC;
                    type: t.StringC;
                }>>;
            }>>;
            unlockCond: t.TypeC<{
                phase: t.StringC;
                level: t.NumberC;
            }>;
        }>>;
        talents: t.ArrayC<t.TypeC<{
            candidates: t.ArrayC<t.TypeC<{
                unlockCondition: t.TypeC<{
                    phase: t.StringC;
                    level: t.NumberC;
                }>;
                requiredPotentialRank: t.NumberC;
                prefabKey: t.StringC;
                name: t.StringC;
                description: t.StringC;
                rangeId: t.StringC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    valueStr: t.UnionC<[t.StringC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>;
        potentialRanks: t.ArrayC<t.TypeC<{
            type: t.NumberC;
            description: t.StringC;
            buff: t.TypeC<{
                attributes: t.TypeC<{
                    abnormalFlags: t.NullC;
                    abnormalImmunes: t.NullC;
                    abnormalAntis: t.NullC;
                    abnormalCombos: t.NullC;
                    abnormalComboImmunes: t.NullC;
                    attributeModifiers: t.ArrayC<t.TypeC<{
                        attributeType: t.NumberC;
                        formulaItem: t.NumberC;
                        value: t.NumberC;
                        loadFromBlackboard: t.BooleanC;
                        fetchBaseValueFromSourceEntity: t.BooleanC;
                    }>>;
                }>;
            }>;
            equivalentCost: t.NullC;
        }>>;
        favorKeyFrames: t.ArrayC<t.TypeC<{
            level: t.NumberC;
            data: t.TypeC<{
                maxHp: t.NumberC;
                atk: t.NumberC;
                def: t.NumberC;
                magicResistance: t.NumberC;
                cost: t.NumberC;
                blockCnt: t.NumberC;
                moveSpeed: t.NumberC;
                attackSpeed: t.NumberC;
                baseAttackTime: t.NumberC;
                respawnTime: t.NumberC;
                hpRecoveryPerSec: t.NumberC;
                spRecoveryPerSec: t.NumberC;
                maxDeployCount: t.NumberC;
                maxDeckStackCnt: t.NumberC;
                tauntLevel: t.NumberC;
                massLevel: t.NumberC;
                baseForceLevel: t.NumberC;
                stunImmune: t.BooleanC;
                silenceImmune: t.BooleanC;
                sleepImmune: t.BooleanC;
                frozenImmune: t.BooleanC;
                levitateImmune: t.BooleanC;
            }>;
        }>>;
        allSkillLvlup: t.ArrayC<t.TypeC<{
            unlockCond: t.TypeC<{
                phase: t.StringC;
                level: t.NumberC;
            }>;
            lvlUpCost: t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>;
        }>>;
    }>;
}>;
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
