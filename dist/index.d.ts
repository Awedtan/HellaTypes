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
    value: t.UnionC<[t.NumberC, t.NullC]>;
    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
}>;
export declare const EnemyAttributesIO: t.TypeC<{
    maxHp: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    atk: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    def: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    magicResistance: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    cost: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    blockCnt: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    moveSpeed: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    attackSpeed: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    baseAttackTime: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    respawnTime: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    hpRecoveryPerSec: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    spRecoveryPerSec: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    maxDeployCount: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    massLevel: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    baseForceLevel: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    tauntLevel: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    epDamageResistance: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    epResistance: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    stunImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    silenceImmune: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>;
    sleepImmune: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>, t.UndefinedC]>;
    frozenImmune: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>, t.UndefinedC]>;
    levitateImmune: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>, t.UndefinedC]>;
}>;
export declare const EnemySkillsIO: t.TypeC<{
    prefabKey: t.StringC;
    priority: t.NumberC;
    cooldown: t.NumberC;
    initCooldown: t.NumberC;
    spCost: t.NumberC;
    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
        key: t.StringC;
        value: t.UnionC<[t.NumberC, t.NullC]>;
        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
    }>>, t.NullC]>;
}>;
export declare const EnemySpDataIO: t.TypeC<{
    spType: t.StringC;
    maxSp: t.NumberC;
    initSp: t.NumberC;
    increment: t.NumberC;
}>;
export declare const EnemyData: t.TypeC<{
    name: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>;
    description: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>;
    prefabKey: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>;
    attributes: t.TypeC<{
        maxHp: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        atk: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        def: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        magicResistance: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        cost: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        blockCnt: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        moveSpeed: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        attackSpeed: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        baseAttackTime: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        respawnTime: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        hpRecoveryPerSec: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        spRecoveryPerSec: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        maxDeployCount: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        massLevel: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        baseForceLevel: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>;
        tauntLevel: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>, t.UndefinedC]>;
        epDamageResistance: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>, t.UndefinedC]>;
        epResistance: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.UnionC<[t.NumberC, t.NullC]>;
        }>, t.UndefinedC]>;
        stunImmune: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.BooleanC;
        }>;
        silenceImmune: t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.BooleanC;
        }>;
        sleepImmune: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.BooleanC;
        }>, t.UndefinedC]>;
        frozenImmune: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.BooleanC;
        }>, t.UndefinedC]>;
        levitateImmune: t.UnionC<[t.TypeC<{
            m_defined: t.BooleanC;
            m_value: t.BooleanC;
        }>, t.UndefinedC]>;
    }>;
    applyWay: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>, t.UndefinedC]>;
    motion: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>, t.UndefinedC]>;
    enemyTags: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
    }>, t.UndefinedC]>;
    lifePointReduce: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    levelType: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.StringC, t.NullC]>;
    }>, t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    rangeRadius: t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>;
    numOfExtraDrops: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    viewRadius: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.UnionC<[t.NumberC, t.NullC]>;
    }>, t.UndefinedC]>;
    notCountInTotal: t.UnionC<[t.TypeC<{
        m_defined: t.BooleanC;
        m_value: t.BooleanC;
    }>, t.UndefinedC]>;
    talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
        key: t.StringC;
        value: t.UnionC<[t.NumberC, t.NullC]>;
        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
    }>>, t.NullC]>;
    skills: t.UnionC<[t.ArrayC<t.TypeC<{
        prefabKey: t.StringC;
        priority: t.NumberC;
        cooldown: t.NumberC;
        initCooldown: t.NumberC;
        spCost: t.NumberC;
        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>, t.NullC]>;
    }>>, t.NullC]>;
    spData: t.UnionC<[t.TypeC<{
        spType: t.StringC;
        maxSp: t.NumberC;
        initSp: t.NumberC;
        increment: t.NumberC;
    }>, t.NullC]>;
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
    phase: t.UnionC<[t.StringC, t.NumberC]>;
    level: t.NumberC;
}>;
export declare const LevelUpCostCondIO: t.TypeC<{
    unlockCond: t.TypeC<{
        phase: t.UnionC<[t.StringC, t.NumberC]>;
        level: t.NumberC;
    }>;
    lvlUpTime: t.NumberC;
    levelUpCost: t.UnionC<[t.ArrayC<t.TypeC<{
        id: t.StringC;
        count: t.NumberC;
        type: t.StringC;
    }>>, t.NullC]>;
}>;
export declare const StageDefinesIO: t.TypeC<{
    characterInsts: t.ArrayC<t.AnyC>;
    tokenInsts: t.ArrayC<t.TypeC<{
        position: t.TypeC<{
            row: t.NumberC;
            col: t.NumberC;
        }>;
        direction: t.UnionC<[t.StringC, t.NumberC]>;
        hidden: t.BooleanC;
        alias: t.UnionC<[t.StringC, t.NullC]>;
        uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            level: t.NumberC;
        }>>, t.NullC, t.UndefinedC]>;
        inst: t.TypeC<{
            characterKey: t.StringC;
            level: t.NumberC;
            phase: t.UnionC<[t.StringC, t.NumberC]>;
            favorPoint: t.NumberC;
            potentialRank: t.NumberC;
        }>;
        skillIndex: t.NumberC;
        mainSkillLvl: t.NumberC;
        skinId: t.UnionC<[t.StringC, t.NullC]>;
        tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>, t.NullC, t.UndefinedC]>;
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
    direction: t.UnionC<[t.StringC, t.NumberC]>;
}>;
export declare const StageActionIO: t.TypeC<{
    preDelay: t.NumberC;
    actions: t.ArrayC<t.TypeC<{
        actionType: t.UnionC<[t.StringC, t.NumberC]>;
        managedByScheduler: t.BooleanC;
        key: t.StringC;
        count: t.NumberC;
        preDelay: t.NumberC;
        interval: t.NumberC;
        routeIndex: t.NumberC;
        blockFragment: t.BooleanC;
        autoPreviewRoute: t.BooleanC;
        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
    }>>;
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
        isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
        functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
        configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>, t.NullC, t.UndefinedC]>;
    }>;
    levelId: t.UnionC<[t.StringC, t.NullC]>;
    mapId: t.UnionC<[t.StringC, t.NullC]>;
    bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
    environmentSe: t.UnionC<[t.StringC, t.NullC]>;
    mapData: t.TypeC<{
        map: t.ArrayC<t.ArrayC<t.NumberC>>;
        tiles: t.ArrayC<t.TypeC<{
            tileKey: t.StringC;
            heightType: t.UnionC<[t.StringC, t.NumberC]>;
            buildableType: t.UnionC<[t.StringC, t.NumberC]>;
            passableMask: t.UnionC<[t.StringC, t.NumberC]>;
            playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
        }>>;
        blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
        tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
        effects: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            offset: t.TypeC<{
                x: t.NumberC;
                y: t.NumberC;
                z: t.NumberC;
            }>;
            direction: t.UnionC<[t.StringC, t.NumberC]>;
        }>>, t.NullC]>;
        layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
    }>;
    tilesDisallowToLocate: t.ArrayC<t.AnyC>;
    runes: t.UnionC<[t.ArrayC<t.TypeC<{
        difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
        key: t.StringC;
        professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
        blackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
    }>>, t.NullC]>;
    globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
        prefabKey: t.StringC;
        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>, t.NullC]>;
        overrideCameraEffect: t.NullC;
        passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
    }>>, t.NullC]>;
    routes: t.ArrayC<t.UnionC<[t.TypeC<{
        motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
        checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
            type: t.UnionC<[t.StringC, t.NumberC]>;
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
        }>>, t.NullC]>;
        allowDiagonalMove: t.BooleanC;
        visitEveryTileCenter: t.BooleanC;
        visitEveryNodeCenter: t.BooleanC;
        visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
    }>, t.NullC]>>;
    extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
    enemies: t.ArrayC<t.AnyC>;
    enemyDbRefs: t.ArrayC<t.TypeC<{
        useDb: t.BooleanC;
        id: t.StringC;
        level: t.NumberC;
        overwrittenData: t.UnionC<[t.TypeC<{
            name: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>;
            description: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>;
            prefabKey: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>;
            attributes: t.TypeC<{
                maxHp: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                atk: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                def: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                magicResistance: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                cost: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                blockCnt: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                moveSpeed: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                attackSpeed: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                baseAttackTime: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                respawnTime: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                hpRecoveryPerSec: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                spRecoveryPerSec: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                maxDeployCount: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                massLevel: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                baseForceLevel: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                tauntLevel: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                epDamageResistance: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                epResistance: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                stunImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                silenceImmune: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>;
                sleepImmune: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                frozenImmune: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                levitateImmune: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
            }>;
            applyWay: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>, t.UndefinedC]>;
            motion: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>, t.UndefinedC]>;
            enemyTags: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            }>, t.UndefinedC]>;
            lifePointReduce: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.NumberC, t.NullC]>;
            }>;
            levelType: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.StringC, t.NullC]>;
            }>, t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.NumberC, t.NullC]>;
            }>, t.UndefinedC]>;
            rangeRadius: t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.NumberC, t.NullC]>;
            }>;
            numOfExtraDrops: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.NumberC, t.NullC]>;
            }>, t.UndefinedC]>;
            viewRadius: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.UnionC<[t.NumberC, t.NullC]>;
            }>, t.UndefinedC]>;
            notCountInTotal: t.UnionC<[t.TypeC<{
                m_defined: t.BooleanC;
                m_value: t.BooleanC;
            }>, t.UndefinedC]>;
            talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            skills: t.UnionC<[t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                priority: t.NumberC;
                cooldown: t.NumberC;
                initCooldown: t.NumberC;
                spCost: t.NumberC;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
            }>>, t.NullC]>;
            spData: t.UnionC<[t.TypeC<{
                spType: t.StringC;
                maxSp: t.NumberC;
                initSp: t.NumberC;
                increment: t.NumberC;
            }>, t.NullC]>;
        }>, t.NullC]>;
    }>>;
    waves: t.ArrayC<t.TypeC<{
        preDelay: t.NumberC;
        postDelay: t.NumberC;
        maxTimeWaitingForNextWave: t.NumberC;
        fragments: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            actions: t.ArrayC<t.TypeC<{
                actionType: t.UnionC<[t.StringC, t.NumberC]>;
                managedByScheduler: t.BooleanC;
                key: t.StringC;
                count: t.NumberC;
                preDelay: t.NumberC;
                interval: t.NumberC;
                routeIndex: t.NumberC;
                blockFragment: t.BooleanC;
                autoPreviewRoute: t.BooleanC;
                autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>>;
        }>>;
        advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
    }>>;
    branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
        phases: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            actions: t.ArrayC<t.TypeC<{
                actionType: t.UnionC<[t.StringC, t.NumberC]>;
                managedByScheduler: t.BooleanC;
                key: t.StringC;
                count: t.NumberC;
                preDelay: t.NumberC;
                interval: t.NumberC;
                routeIndex: t.NumberC;
                blockFragment: t.BooleanC;
                autoPreviewRoute: t.BooleanC;
                autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>>;
        }>>;
    }>>, t.NullC]>;
    predefines: t.UnionC<[t.TypeC<{
        characterInsts: t.ArrayC<t.AnyC>;
        tokenInsts: t.ArrayC<t.TypeC<{
            position: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            direction: t.UnionC<[t.StringC, t.NumberC]>;
            hidden: t.BooleanC;
            alias: t.UnionC<[t.StringC, t.NullC]>;
            uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                level: t.NumberC;
            }>>, t.NullC, t.UndefinedC]>;
            inst: t.TypeC<{
                characterKey: t.StringC;
                level: t.NumberC;
                phase: t.UnionC<[t.StringC, t.NumberC]>;
                favorPoint: t.NumberC;
                potentialRank: t.NumberC;
            }>;
            skillIndex: t.NumberC;
            mainSkillLvl: t.NumberC;
            skinId: t.UnionC<[t.StringC, t.NullC]>;
            tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>>;
        characterCards: t.ArrayC<t.AnyC>;
        tokenCards: t.ArrayC<t.AnyC>;
    }>, t.NullC]>;
    hardPredefines: t.UnionC<[t.TypeC<{
        characterInsts: t.ArrayC<t.AnyC>;
        tokenInsts: t.ArrayC<t.TypeC<{
            position: t.TypeC<{
                row: t.NumberC;
                col: t.NumberC;
            }>;
            direction: t.UnionC<[t.StringC, t.NumberC]>;
            hidden: t.BooleanC;
            alias: t.UnionC<[t.StringC, t.NullC]>;
            uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                level: t.NumberC;
            }>>, t.NullC, t.UndefinedC]>;
            inst: t.TypeC<{
                characterKey: t.StringC;
                level: t.NumberC;
                phase: t.UnionC<[t.StringC, t.NumberC]>;
                favorPoint: t.NumberC;
                potentialRank: t.NumberC;
            }>;
            skillIndex: t.NumberC;
            mainSkillLvl: t.NumberC;
            skinId: t.UnionC<[t.StringC, t.NullC]>;
            tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>>;
        characterCards: t.ArrayC<t.AnyC>;
        tokenCards: t.ArrayC<t.AnyC>;
    }>, t.NullC, t.UndefinedC]>;
    excludeCharIdList: t.NullC;
    randomSeed: t.NumberC;
    operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
    runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
}>;
export declare const RogueRelicIO: t.TypeC<{
    id: t.StringC;
    name: t.StringC;
    description: t.UnionC<[t.StringC, t.NullC]>;
    usage: t.StringC;
    obtainApproach: t.StringC;
    iconId: t.StringC;
    type: t.StringC;
    subType: t.StringC;
    rarity: t.StringC;
    value: t.NumberC;
    sortId: t.NumberC;
    canSacrifice: t.BooleanC;
    unlockCondDesc: t.UnionC<[t.StringC, t.NullC]>;
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
        eliteDesc: t.UnionC<[t.StringC, t.NullC]>;
        isBoss: t.NumberC;
        isElite: t.NumberC;
        difficulty: t.StringC;
        capsulePool: t.UnionC<[t.StringC, t.NullC]>;
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
            isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
            functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
            configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>;
        levelId: t.UnionC<[t.StringC, t.NullC]>;
        mapId: t.UnionC<[t.StringC, t.NullC]>;
        bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
        environmentSe: t.UnionC<[t.StringC, t.NullC]>;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.UnionC<[t.StringC, t.NumberC]>;
                buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
            }>>;
            blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
            tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
            layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.UnionC<[t.ArrayC<t.TypeC<{
            difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
            key: t.StringC;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
        }>>, t.NullC]>;
        globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        }>>, t.NullC]>;
        routes: t.ArrayC<t.UnionC<[t.TypeC<{
            motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
            checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.UnionC<[t.StringC, t.NumberC]>;
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
            }>>, t.NullC]>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        }>, t.NullC]>>;
        extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.UnionC<[t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
            }>, t.NullC]>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
            advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
        branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        predefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC]>;
        hardPredefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC, t.UndefinedC]>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
    }>;
}>;
export declare const RogueVariationIO: t.TypeC<{
    id: t.StringC;
    type: t.StringC;
    outerName: t.StringC;
    innerName: t.StringC;
    functionDesc: t.StringC;
    desc: t.StringC;
    iconId: t.UnionC<[t.StringC, t.NullC]>;
    sound: t.UnionC<[t.StringC, t.NullC]>;
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
            isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
            functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
            configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>;
        levelId: t.UnionC<[t.StringC, t.NullC]>;
        mapId: t.UnionC<[t.StringC, t.NullC]>;
        bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
        environmentSe: t.UnionC<[t.StringC, t.NullC]>;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.UnionC<[t.StringC, t.NumberC]>;
                buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
            }>>;
            blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
            tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
            layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.UnionC<[t.ArrayC<t.TypeC<{
            difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
            key: t.StringC;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
        }>>, t.NullC]>;
        globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        }>>, t.NullC]>;
        routes: t.ArrayC<t.UnionC<[t.TypeC<{
            motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
            checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.UnionC<[t.StringC, t.NumberC]>;
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
            }>>, t.NullC]>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        }>, t.NullC]>>;
        extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.UnionC<[t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
            }>, t.NullC]>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
            advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
        branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        predefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC]>;
        hardPredefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC, t.UndefinedC]>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
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
            isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
            functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
            configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>;
        levelId: t.UnionC<[t.StringC, t.NullC]>;
        mapId: t.UnionC<[t.StringC, t.NullC]>;
        bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
        environmentSe: t.UnionC<[t.StringC, t.NullC]>;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.UnionC<[t.StringC, t.NumberC]>;
                buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
            }>>;
            blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
            tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
            layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.UnionC<[t.ArrayC<t.TypeC<{
            difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
            key: t.StringC;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
        }>>, t.NullC]>;
        globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        }>>, t.NullC]>;
        routes: t.ArrayC<t.UnionC<[t.TypeC<{
            motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
            checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.UnionC<[t.StringC, t.NumberC]>;
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
            }>>, t.NullC]>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        }>, t.NullC]>>;
        extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.UnionC<[t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
            }>, t.NullC]>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
            advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
        branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        predefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC]>;
        hardPredefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC, t.UndefinedC]>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
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
        enemyTags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
        sortId: t.NumberC;
        name: t.StringC;
        enemyLevel: t.StringC;
        description: t.StringC;
        attackType: t.NullC;
        ability: t.NullC;
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
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
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
    templateShopId: t.UnionC<[t.StringC, t.NullC]>;
    medalGroupId: t.UnionC<[t.StringC, t.NullC]>;
    isReplicate: t.BooleanC;
}>;
export declare const ItemIO: t.TypeC<{
    data: t.TypeC<{
        itemId: t.StringC;
        name: t.StringC;
        description: t.UnionC<[t.StringC, t.NullC]>;
        rarity: t.StringC;
        iconId: t.StringC;
        overrideBkg: t.NullC;
        stackIconId: t.UnionC<[t.StringC, t.NullC]>;
        sortId: t.NumberC;
        usage: t.UnionC<[t.StringC, t.NullC]>;
        obtainApproach: t.UnionC<[t.StringC, t.NullC]>;
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
    }>, t.NullC]>;
}>;
export declare const ModuleIO: t.TypeC<{
    info: t.TypeC<{
        uniEquipId: t.StringC;
        uniEquipName: t.StringC;
        uniEquipIcon: t.StringC;
        uniEquipDesc: t.StringC;
        typeIcon: t.StringC;
        typeName1: t.StringC;
        typeName2: t.UnionC<[t.StringC, t.NullC]>;
        equipShiningColor: t.StringC;
        showEvolvePhase: t.StringC;
        unlockEvolvePhase: t.StringC;
        charId: t.StringC;
        tmplId: t.UnionC<[t.StringC, t.NullC]>;
        showLevel: t.NumberC;
        unlockLevel: t.NumberC;
        unlockFavorPoint: t.NumberC;
        missionList: t.ArrayC<t.StringC>;
        itemCost: t.UnionC<[t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
            id: t.StringC;
            count: t.NumberC;
            type: t.StringC;
        }>>>, t.NullC]>;
        type: t.StringC;
        uniEquipGetTime: t.NumberC;
        charEquipOrder: t.NumberC;
    }>;
    data: t.UnionC<[t.TypeC<{
        phases: t.ArrayC<t.TypeC<{
            equipLevel: t.NumberC;
            parts: t.ArrayC<t.TypeC<{
                resKey: t.UnionC<[t.StringC, t.NullC]>;
                target: t.StringC;
                isToken: t.BooleanC;
                addOrOverrideTalentDataBundle: t.TypeC<{
                    candidates: t.UnionC<[t.ArrayC<t.TypeC<{
                        displayRangeId: t.BooleanC;
                        upgradeDescription: t.StringC;
                        talentIndex: t.NumberC;
                        unlockCondition: t.TypeC<{
                            phase: t.UnionC<[t.StringC, t.NumberC]>;
                            level: t.NumberC;
                        }>;
                        requiredPotentialRank: t.NumberC;
                        prefabKey: t.StringC;
                        name: t.UnionC<[t.StringC, t.NullC]>;
                        description: t.UnionC<[t.StringC, t.NullC]>;
                        rangeId: t.UnionC<[t.StringC, t.NullC]>;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>;
                    }>>, t.NullC]>;
                }>;
                overrideTraitDataBundle: t.TypeC<{
                    candidates: t.UnionC<[t.ArrayC<t.TypeC<{
                        additionalDescription: t.UnionC<[t.StringC, t.NullC]>;
                        unlockCondition: t.TypeC<{
                            phase: t.UnionC<[t.StringC, t.NumberC]>;
                            level: t.NumberC;
                        }>;
                        requiredPotentialRank: t.NumberC;
                        blackboard: t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>;
                        overrideDescripton: t.UnionC<[t.StringC, t.NullC]>;
                        prefabKey: t.UnionC<[t.StringC, t.NullC]>;
                        rangeId: t.UnionC<[t.StringC, t.NullC]>;
                    }>>, t.NullC]>;
                }>;
            }>>;
            attributeBlackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
            tokenAttributeBlackboard: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>>;
        }>>;
    }>, t.NullC]>;
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
            unlockType: t.StringC;
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
            isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
            functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
            configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>;
        levelId: t.UnionC<[t.StringC, t.NullC]>;
        mapId: t.UnionC<[t.StringC, t.NullC]>;
        bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
        environmentSe: t.UnionC<[t.StringC, t.NullC]>;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.UnionC<[t.StringC, t.NumberC]>;
                buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
            }>>;
            blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
            tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
            layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.UnionC<[t.ArrayC<t.TypeC<{
            difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
            key: t.StringC;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
        }>>, t.NullC]>;
        globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        }>>, t.NullC]>;
        routes: t.ArrayC<t.UnionC<[t.TypeC<{
            motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
            checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.UnionC<[t.StringC, t.NumberC]>;
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
            }>>, t.NullC]>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        }>, t.NullC]>>;
        extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.UnionC<[t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
            }>, t.NullC]>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
            advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
        branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        predefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC]>;
        hardPredefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC, t.UndefinedC]>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
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
            eliteDesc: t.UnionC<[t.StringC, t.NullC]>;
            isBoss: t.NumberC;
            isElite: t.NumberC;
            difficulty: t.StringC;
            capsulePool: t.UnionC<[t.StringC, t.NullC]>;
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
                isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
                functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
                configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>;
            levelId: t.UnionC<[t.StringC, t.NullC]>;
            mapId: t.UnionC<[t.StringC, t.NullC]>;
            bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
            environmentSe: t.UnionC<[t.StringC, t.NullC]>;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.UnionC<[t.StringC, t.NumberC]>;
                    buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                    passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                    playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    effects: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.UnionC<[t.StringC, t.NumberC]>;
                    }>>, t.NullC]>;
                }>>;
                blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
                tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
                layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.UnionC<[t.ArrayC<t.TypeC<{
                difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
                key: t.StringC;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
            }>>, t.NullC]>;
            globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            }>>, t.NullC]>;
            routes: t.ArrayC<t.UnionC<[t.TypeC<{
                motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
                checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                    type: t.UnionC<[t.StringC, t.NumberC]>;
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
                }>>, t.NullC]>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            }>, t.NullC]>>;
            extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.UnionC<[t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        tauntLevel: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epDamageResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        frozenImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        levitateImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                    }>;
                    applyWay: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    motion: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    enemyTags: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                    }>, t.UndefinedC]>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    levelType: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    numOfExtraDrops: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    viewRadius: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    notCountInTotal: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    skills: t.UnionC<[t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>, t.NullC]>;
                    }>>, t.NullC]>;
                    spData: t.UnionC<[t.TypeC<{
                        spType: t.StringC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>, t.NullC]>;
                }>, t.NullC]>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
                advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
            branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
            }>>, t.NullC]>;
            predefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC]>;
            hardPredefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC, t.UndefinedC]>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
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
            eliteDesc: t.UnionC<[t.StringC, t.NullC]>;
            isBoss: t.NumberC;
            isElite: t.NumberC;
            difficulty: t.StringC;
            capsulePool: t.UnionC<[t.StringC, t.NullC]>;
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
                isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
                functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
                configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>;
            levelId: t.UnionC<[t.StringC, t.NullC]>;
            mapId: t.UnionC<[t.StringC, t.NullC]>;
            bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
            environmentSe: t.UnionC<[t.StringC, t.NullC]>;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.UnionC<[t.StringC, t.NumberC]>;
                    buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                    passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                    playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    effects: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.UnionC<[t.StringC, t.NumberC]>;
                    }>>, t.NullC]>;
                }>>;
                blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
                tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
                layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.UnionC<[t.ArrayC<t.TypeC<{
                difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
                key: t.StringC;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
            }>>, t.NullC]>;
            globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            }>>, t.NullC]>;
            routes: t.ArrayC<t.UnionC<[t.TypeC<{
                motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
                checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                    type: t.UnionC<[t.StringC, t.NumberC]>;
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
                }>>, t.NullC]>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            }>, t.NullC]>>;
            extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.UnionC<[t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        tauntLevel: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epDamageResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        frozenImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        levitateImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                    }>;
                    applyWay: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    motion: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    enemyTags: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                    }>, t.UndefinedC]>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    levelType: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    numOfExtraDrops: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    viewRadius: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    notCountInTotal: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    skills: t.UnionC<[t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>, t.NullC]>;
                    }>>, t.NullC]>;
                    spData: t.UnionC<[t.TypeC<{
                        spType: t.StringC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>, t.NullC]>;
                }>, t.NullC]>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
                advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
            branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
            }>>, t.NullC]>;
            predefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC]>;
            hardPredefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC, t.UndefinedC]>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
    }>>;
    relicDict: t.RecordC<t.StringC, t.TypeC<{
        id: t.StringC;
        name: t.StringC;
        description: t.UnionC<[t.StringC, t.NullC]>;
        usage: t.StringC;
        obtainApproach: t.StringC;
        iconId: t.StringC;
        type: t.StringC;
        subType: t.StringC;
        rarity: t.StringC;
        value: t.NumberC;
        sortId: t.NumberC;
        canSacrifice: t.BooleanC;
        unlockCondDesc: t.UnionC<[t.StringC, t.NullC]>;
    }>>;
    variationDict: t.RecordC<t.StringC, t.TypeC<{
        id: t.StringC;
        type: t.StringC;
        outerName: t.StringC;
        innerName: t.StringC;
        functionDesc: t.StringC;
        desc: t.StringC;
        iconId: t.UnionC<[t.StringC, t.NullC]>;
        sound: t.UnionC<[t.StringC, t.NullC]>;
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
                isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
                functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
                configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>;
            levelId: t.UnionC<[t.StringC, t.NullC]>;
            mapId: t.UnionC<[t.StringC, t.NullC]>;
            bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
            environmentSe: t.UnionC<[t.StringC, t.NullC]>;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.UnionC<[t.StringC, t.NumberC]>;
                    buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                    passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                    playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    effects: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.UnionC<[t.StringC, t.NumberC]>;
                    }>>, t.NullC]>;
                }>>;
                blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
                tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
                layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.UnionC<[t.ArrayC<t.TypeC<{
                difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
                key: t.StringC;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
            }>>, t.NullC]>;
            globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            }>>, t.NullC]>;
            routes: t.ArrayC<t.UnionC<[t.TypeC<{
                motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
                checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                    type: t.UnionC<[t.StringC, t.NumberC]>;
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
                }>>, t.NullC]>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            }>, t.NullC]>>;
            extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.UnionC<[t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        tauntLevel: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epDamageResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        frozenImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        levitateImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                    }>;
                    applyWay: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    motion: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    enemyTags: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                    }>, t.UndefinedC]>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    levelType: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    numOfExtraDrops: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    viewRadius: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    notCountInTotal: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    skills: t.UnionC<[t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>, t.NullC]>;
                    }>>, t.NullC]>;
                    spData: t.UnionC<[t.TypeC<{
                        spType: t.StringC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>, t.NullC]>;
                }>, t.NullC]>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
                advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
            branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
            }>>, t.NullC]>;
            predefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC]>;
            hardPredefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC, t.UndefinedC]>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
    }>>;
}>;
export declare const SkillIO: t.TypeC<{
    skillId: t.StringC;
    iconId: t.UnionC<[t.StringC, t.NullC]>;
    hidden: t.BooleanC;
    levels: t.ArrayC<t.TypeC<{
        name: t.StringC;
        rangeId: t.UnionC<[t.StringC, t.NullC]>;
        description: t.UnionC<[t.StringC, t.NullC]>;
        skillType: t.StringC;
        durationType: t.StringC;
        spData: t.TypeC<{
            spType: t.UnionC<[t.StringC, t.NumberC]>;
            levelUpCost: t.NullC;
            maxChargeTime: t.NumberC;
            spCost: t.NumberC;
            initSp: t.NumberC;
            increment: t.NumberC;
        }>;
        prefabId: t.UnionC<[t.StringC, t.NullC]>;
        duration: t.NumberC;
        blackboard: t.ArrayC<t.TypeC<{
            key: t.StringC;
            value: t.UnionC<[t.NumberC, t.NullC]>;
            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
    }>>;
}>;
export declare const SkinIO: t.TypeC<{
    skinId: t.StringC;
    charId: t.StringC;
    tokenSkinMap: t.UnionC<[t.ArrayC<t.TypeC<{
        tokenId: t.StringC;
        tokenSkinId: t.StringC;
    }>>, t.NullC]>;
    illustId: t.UnionC<[t.StringC, t.NullC]>;
    dynIllustId: t.UnionC<[t.StringC, t.NullC]>;
    avatarId: t.StringC;
    portraitId: t.UnionC<[t.StringC, t.NullC]>;
    dynPortraitId: t.UnionC<[t.StringC, t.NullC]>;
    dynEntranceId: t.UnionC<[t.StringC, t.NullC]>;
    buildingId: t.UnionC<[t.StringC, t.NullC]>;
    battleSkin: t.TypeC<{
        overwritePrefab: t.BooleanC;
        skinOrPrefabId: t.UnionC<[t.StringC, t.NullC]>;
    }>;
    isBuySkin: t.BooleanC;
    tmplId: t.UnionC<[t.StringC, t.NullC]>;
    voiceId: t.UnionC<[t.StringC, t.NullC]>;
    voiceType: t.StringC;
    displaySkin: t.TypeC<{
        skinName: t.UnionC<[t.StringC, t.NullC]>;
        colorList: t.UnionC<[t.TupleC<[t.StringC, t.StringC, t.StringC, t.StringC, t.StringC]>, t.NullC]>;
        modelName: t.UnionC<[t.StringC, t.NullC]>;
        drawerList: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
        skinGroupId: t.UnionC<[t.StringC, t.NullC]>;
        skinGroupName: t.UnionC<[t.StringC, t.NullC]>;
        skinGroupSortIndex: t.NumberC;
        content: t.UnionC<[t.StringC, t.NullC]>;
        dialog: t.UnionC<[t.StringC, t.NullC]>;
        usage: t.UnionC<[t.StringC, t.NullC]>;
        description: t.UnionC<[t.StringC, t.NullC]>;
        obtainApproach: t.UnionC<[t.StringC, t.NullC]>;
        sortId: t.NumberC;
        displayTagId: t.UnionC<[t.StringC, t.NullC]>;
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
        unlockCondition: t.ArrayC<t.UnionC<[t.TypeC<{
            stageId: t.StringC;
            completeState: t.StringC;
        }>, t.NullC]>>;
        stageId: t.StringC;
        levelId: t.StringC;
        zoneId: t.StringC;
        code: t.StringC;
        name: t.StringC;
        description: t.StringC;
        hardStagedId: t.UnionC<[t.StringC, t.NullC]>;
        dangerLevel: t.UnionC<[t.StringC, t.NullC]>;
        dangerPoint: t.NumberC;
        loadingPicId: t.StringC;
        canPractice: t.BooleanC;
        canBattleReplay: t.BooleanC;
        apCost: t.NumberC;
        apFailReturn: t.NumberC;
        etItemId: t.UnionC<[t.StringC, t.NullC]>;
        etCost: t.NumberC;
        etFailReturn: t.NumberC;
        etButtonStyle: t.UnionC<[t.StringC, t.NullC]>;
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
        displayMainItem: t.UnionC<[t.StringC, t.NullC]>;
        hilightMark: t.BooleanC;
        bossMark: t.BooleanC;
        isPredefined: t.BooleanC;
        isHardPredefined: t.BooleanC;
        isSkillSelectablePredefined: t.BooleanC;
        isStoryOnly: t.BooleanC;
        appearanceStyle: t.StringC;
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
                occPercent: t.StringC;
                type: t.StringC;
                id: t.StringC;
                dropType: t.StringC;
            }>>;
        }>;
        canUseCharm: t.BooleanC;
        canUseTech: t.BooleanC;
        canUseTrapTool: t.BooleanC;
        canUseBattlePerformance: t.BooleanC;
        startButtonOverrideId: t.UnionC<[t.StringC, t.NullC]>;
        isStagePatch: t.BooleanC;
        mainStageId: t.UnionC<[t.StringC, t.NullC]>;
        extraCondition: t.UnionC<[t.ArrayC<t.TypeC<{
            index: t.NumberC;
            template: t.StringC;
            unlockParam: t.ArrayC<t.StringC>;
        }>>, t.NullC]>;
        extraInfo: t.UnionC<[t.ArrayC<t.TypeC<{
            stageId: t.StringC;
            rewards: t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>;
            progressInfo: t.TypeC<{
                progressType: t.StringC;
                descList: t.RecordC<t.StringC, t.StringC>;
            }>;
        }>>, t.NullC]>;
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
            isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
            functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
            configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC, t.UndefinedC]>;
        }>;
        levelId: t.UnionC<[t.StringC, t.NullC]>;
        mapId: t.UnionC<[t.StringC, t.NullC]>;
        bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
        environmentSe: t.UnionC<[t.StringC, t.NullC]>;
        mapData: t.TypeC<{
            map: t.ArrayC<t.ArrayC<t.NumberC>>;
            tiles: t.ArrayC<t.TypeC<{
                tileKey: t.StringC;
                heightType: t.UnionC<[t.StringC, t.NumberC]>;
                buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
            }>>;
            blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
            tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            effects: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                offset: t.TypeC<{
                    x: t.NumberC;
                    y: t.NumberC;
                    z: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
            }>>, t.NullC]>;
            layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
        tilesDisallowToLocate: t.ArrayC<t.AnyC>;
        runes: t.UnionC<[t.ArrayC<t.TypeC<{
            difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
            key: t.StringC;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
        }>>, t.NullC]>;
        globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
            prefabKey: t.StringC;
            blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>, t.NullC]>;
            overrideCameraEffect: t.NullC;
            passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
        }>>, t.NullC]>;
        routes: t.ArrayC<t.UnionC<[t.TypeC<{
            motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
            checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.UnionC<[t.StringC, t.NumberC]>;
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
            }>>, t.NullC]>;
            allowDiagonalMove: t.BooleanC;
            visitEveryTileCenter: t.BooleanC;
            visitEveryNodeCenter: t.BooleanC;
            visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
        }>, t.NullC]>>;
        extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
        enemies: t.ArrayC<t.AnyC>;
        enemyDbRefs: t.ArrayC<t.TypeC<{
            useDb: t.BooleanC;
            id: t.StringC;
            level: t.NumberC;
            overwrittenData: t.UnionC<[t.TypeC<{
                name: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                description: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                prefabKey: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>;
                attributes: t.TypeC<{
                    maxHp: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    atk: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    def: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    magicResistance: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    cost: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    blockCnt: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    moveSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    attackSpeed: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseAttackTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    respawnTime: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    hpRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    spRecoveryPerSec: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    maxDeployCount: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    massLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    baseForceLevel: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    tauntLevel: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epDamageResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    epResistance: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    stunImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    silenceImmune: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>;
                    sleepImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    frozenImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    levitateImmune: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                }>;
                applyWay: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                motion: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.UndefinedC]>;
                enemyTags: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                }>, t.UndefinedC]>;
                lifePointReduce: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                levelType: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.StringC, t.NullC]>;
                }>, t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                rangeRadius: t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>;
                numOfExtraDrops: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                viewRadius: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.UnionC<[t.NumberC, t.NullC]>;
                }>, t.UndefinedC]>;
                notCountInTotal: t.UnionC<[t.TypeC<{
                    m_defined: t.BooleanC;
                    m_value: t.BooleanC;
                }>, t.UndefinedC]>;
                talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                skills: t.UnionC<[t.ArrayC<t.TypeC<{
                    prefabKey: t.StringC;
                    priority: t.NumberC;
                    cooldown: t.NumberC;
                    initCooldown: t.NumberC;
                    spCost: t.NumberC;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                }>>, t.NullC]>;
                spData: t.UnionC<[t.TypeC<{
                    spType: t.StringC;
                    maxSp: t.NumberC;
                    initSp: t.NumberC;
                    increment: t.NumberC;
                }>, t.NullC]>;
            }>, t.NullC]>;
        }>>;
        waves: t.ArrayC<t.TypeC<{
            preDelay: t.NumberC;
            postDelay: t.NumberC;
            maxTimeWaitingForNextWave: t.NumberC;
            fragments: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
            advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        }>>;
        branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                actions: t.ArrayC<t.TypeC<{
                    actionType: t.UnionC<[t.StringC, t.NumberC]>;
                    managedByScheduler: t.BooleanC;
                    key: t.StringC;
                    count: t.NumberC;
                    preDelay: t.NumberC;
                    interval: t.NumberC;
                    routeIndex: t.NumberC;
                    blockFragment: t.BooleanC;
                    autoPreviewRoute: t.BooleanC;
                    autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                    hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                    randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                    dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                    extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        predefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC]>;
        hardPredefines: t.UnionC<[t.TypeC<{
            characterInsts: t.ArrayC<t.AnyC>;
            tokenInsts: t.ArrayC<t.TypeC<{
                position: t.TypeC<{
                    row: t.NumberC;
                    col: t.NumberC;
                }>;
                direction: t.UnionC<[t.StringC, t.NumberC]>;
                hidden: t.BooleanC;
                alias: t.UnionC<[t.StringC, t.NullC]>;
                uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    level: t.NumberC;
                }>>, t.NullC, t.UndefinedC]>;
                inst: t.TypeC<{
                    characterKey: t.StringC;
                    level: t.NumberC;
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    favorPoint: t.NumberC;
                    potentialRank: t.NumberC;
                }>;
                skillIndex: t.NumberC;
                mainSkillLvl: t.NumberC;
                skinId: t.UnionC<[t.StringC, t.NullC]>;
                tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>>;
            characterCards: t.ArrayC<t.AnyC>;
            tokenCards: t.ArrayC<t.AnyC>;
        }>, t.NullC, t.UndefinedC]>;
        excludeCharIdList: t.NullC;
        randomSeed: t.NumberC;
        operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
        runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
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
        iconId: t.UnionC<[t.StringC, t.NullC]>;
        hidden: t.BooleanC;
        levels: t.ArrayC<t.TypeC<{
            name: t.StringC;
            rangeId: t.UnionC<[t.StringC, t.NullC]>;
            description: t.UnionC<[t.StringC, t.NullC]>;
            skillType: t.StringC;
            durationType: t.StringC;
            spData: t.TypeC<{
                spType: t.UnionC<[t.StringC, t.NumberC]>;
                levelUpCost: t.NullC;
                maxChargeTime: t.NumberC;
                spCost: t.NumberC;
                initSp: t.NumberC;
                increment: t.NumberC;
            }>;
            prefabId: t.UnionC<[t.StringC, t.NullC]>;
            duration: t.NumberC;
            blackboard: t.ArrayC<t.TypeC<{
                key: t.StringC;
                value: t.UnionC<[t.NumberC, t.NullC]>;
                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
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
            typeName2: t.UnionC<[t.StringC, t.NullC]>;
            equipShiningColor: t.StringC;
            showEvolvePhase: t.StringC;
            unlockEvolvePhase: t.StringC;
            charId: t.StringC;
            tmplId: t.UnionC<[t.StringC, t.NullC]>;
            showLevel: t.NumberC;
            unlockLevel: t.NumberC;
            unlockFavorPoint: t.NumberC;
            missionList: t.ArrayC<t.StringC>;
            itemCost: t.UnionC<[t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>>, t.NullC]>;
            type: t.StringC;
            uniEquipGetTime: t.NumberC;
            charEquipOrder: t.NumberC;
        }>;
        data: t.UnionC<[t.TypeC<{
            phases: t.ArrayC<t.TypeC<{
                equipLevel: t.NumberC;
                parts: t.ArrayC<t.TypeC<{
                    resKey: t.UnionC<[t.StringC, t.NullC]>;
                    target: t.StringC;
                    isToken: t.BooleanC;
                    addOrOverrideTalentDataBundle: t.TypeC<{
                        candidates: t.UnionC<[t.ArrayC<t.TypeC<{
                            displayRangeId: t.BooleanC;
                            upgradeDescription: t.StringC;
                            talentIndex: t.NumberC;
                            unlockCondition: t.TypeC<{
                                phase: t.UnionC<[t.StringC, t.NumberC]>;
                                level: t.NumberC;
                            }>;
                            requiredPotentialRank: t.NumberC;
                            prefabKey: t.StringC;
                            name: t.UnionC<[t.StringC, t.NullC]>;
                            description: t.UnionC<[t.StringC, t.NullC]>;
                            rangeId: t.UnionC<[t.StringC, t.NullC]>;
                            blackboard: t.ArrayC<t.TypeC<{
                                key: t.StringC;
                                value: t.UnionC<[t.NumberC, t.NullC]>;
                                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                            }>>;
                        }>>, t.NullC]>;
                    }>;
                    overrideTraitDataBundle: t.TypeC<{
                        candidates: t.UnionC<[t.ArrayC<t.TypeC<{
                            additionalDescription: t.UnionC<[t.StringC, t.NullC]>;
                            unlockCondition: t.TypeC<{
                                phase: t.UnionC<[t.StringC, t.NumberC]>;
                                level: t.NumberC;
                            }>;
                            requiredPotentialRank: t.NumberC;
                            blackboard: t.ArrayC<t.TypeC<{
                                key: t.StringC;
                                value: t.UnionC<[t.NumberC, t.NullC]>;
                                valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                            }>>;
                            overrideDescripton: t.UnionC<[t.StringC, t.NullC]>;
                            prefabKey: t.UnionC<[t.StringC, t.NullC]>;
                            rangeId: t.UnionC<[t.StringC, t.NullC]>;
                        }>>, t.NullC]>;
                    }>;
                }>>;
                attributeBlackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
                tokenAttributeBlackboard: t.RecordC<t.StringC, t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>>;
            }>>;
        }>, t.NullC]>;
    }>>;
    skins: t.ArrayC<t.TypeC<{
        skinId: t.StringC;
        charId: t.StringC;
        tokenSkinMap: t.UnionC<[t.ArrayC<t.TypeC<{
            tokenId: t.StringC;
            tokenSkinId: t.StringC;
        }>>, t.NullC]>;
        illustId: t.UnionC<[t.StringC, t.NullC]>;
        dynIllustId: t.UnionC<[t.StringC, t.NullC]>;
        avatarId: t.StringC;
        portraitId: t.UnionC<[t.StringC, t.NullC]>;
        dynPortraitId: t.UnionC<[t.StringC, t.NullC]>;
        dynEntranceId: t.UnionC<[t.StringC, t.NullC]>;
        buildingId: t.UnionC<[t.StringC, t.NullC]>;
        battleSkin: t.TypeC<{
            overwritePrefab: t.BooleanC;
            skinOrPrefabId: t.UnionC<[t.StringC, t.NullC]>;
        }>;
        isBuySkin: t.BooleanC;
        tmplId: t.UnionC<[t.StringC, t.NullC]>;
        voiceId: t.UnionC<[t.StringC, t.NullC]>;
        voiceType: t.StringC;
        displaySkin: t.TypeC<{
            skinName: t.UnionC<[t.StringC, t.NullC]>;
            colorList: t.UnionC<[t.TupleC<[t.StringC, t.StringC, t.StringC, t.StringC, t.StringC]>, t.NullC]>;
            modelName: t.UnionC<[t.StringC, t.NullC]>;
            drawerList: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
            skinGroupId: t.UnionC<[t.StringC, t.NullC]>;
            skinGroupName: t.UnionC<[t.StringC, t.NullC]>;
            skinGroupSortIndex: t.NumberC;
            content: t.UnionC<[t.StringC, t.NullC]>;
            dialog: t.UnionC<[t.StringC, t.NullC]>;
            usage: t.UnionC<[t.StringC, t.NullC]>;
            description: t.UnionC<[t.StringC, t.NullC]>;
            obtainApproach: t.UnionC<[t.StringC, t.NullC]>;
            sortId: t.NumberC;
            displayTagId: t.UnionC<[t.StringC, t.NullC]>;
            getTime: t.NumberC;
            onYear: t.NumberC;
            onPeriod: t.NumberC;
        }>;
    }>>;
    bases: t.ArrayC<t.TypeC<{
        condition: t.TypeC<{
            buffId: t.StringC;
            cond: t.TypeC<{
                phase: t.UnionC<[t.StringC, t.NumberC]>;
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
    paradox: t.UnionC<[t.TypeC<{
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
                unlockType: t.StringC;
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
                isHardTrainingLevel: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                isPredefinedCardsSelectable: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                maxPlayTime: t.UnionC<[t.NumberC, t.UndefinedC]>;
                functionDisableMask: t.UnionC<[t.StringC, t.NumberC]>;
                configBlackBoard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC, t.UndefinedC]>;
            }>;
            levelId: t.UnionC<[t.StringC, t.NullC]>;
            mapId: t.UnionC<[t.StringC, t.NullC]>;
            bgmEvent: t.UnionC<[t.StringC, t.NullC]>;
            environmentSe: t.UnionC<[t.StringC, t.NullC]>;
            mapData: t.TypeC<{
                map: t.ArrayC<t.ArrayC<t.NumberC>>;
                tiles: t.ArrayC<t.TypeC<{
                    tileKey: t.StringC;
                    heightType: t.UnionC<[t.StringC, t.NumberC]>;
                    buildableType: t.UnionC<[t.StringC, t.NumberC]>;
                    passableMask: t.UnionC<[t.StringC, t.NumberC]>;
                    playerSideMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                    blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    effects: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        offset: t.TypeC<{
                            x: t.NumberC;
                            y: t.NumberC;
                            z: t.NumberC;
                        }>;
                        direction: t.UnionC<[t.StringC, t.NumberC]>;
                    }>>, t.NullC]>;
                }>>;
                blockEdges: t.UnionC<[t.ArrayC<t.AnyC>, t.NullC]>;
                tags: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                effects: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    offset: t.TypeC<{
                        x: t.NumberC;
                        y: t.NumberC;
                        z: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                }>>, t.NullC]>;
                layerRects: t.UnionC<[t.NullC, t.UndefinedC]>;
            }>;
            tilesDisallowToLocate: t.ArrayC<t.AnyC>;
            runes: t.UnionC<[t.ArrayC<t.TypeC<{
                difficultyMask: t.UnionC<[t.StringC, t.NumberC]>;
                key: t.StringC;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                buildableMask: t.UnionC<[t.StringC, t.NumberC]>;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
            }>>, t.NullC]>;
            globalBuffs: t.UnionC<[t.ArrayC<t.TypeC<{
                prefabKey: t.StringC;
                blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>, t.NullC]>;
                overrideCameraEffect: t.NullC;
                passProfessionMaskFlag: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                professionMask: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
            }>>, t.NullC]>;
            routes: t.ArrayC<t.UnionC<[t.TypeC<{
                motionMode: t.UnionC<[t.StringC, t.NumberC]>;
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
                checkpoints: t.UnionC<[t.ArrayC<t.TypeC<{
                    type: t.UnionC<[t.StringC, t.NumberC]>;
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
                }>>, t.NullC]>;
                allowDiagonalMove: t.BooleanC;
                visitEveryTileCenter: t.BooleanC;
                visitEveryNodeCenter: t.BooleanC;
                visitEveryCheckPoint: t.UnionC<[t.BooleanC, t.UndefinedC]>;
            }>, t.NullC]>>;
            extraRoutes: t.UnionC<[t.ArrayC<t.AnyC>, t.UndefinedC]>;
            enemies: t.ArrayC<t.AnyC>;
            enemyDbRefs: t.ArrayC<t.TypeC<{
                useDb: t.BooleanC;
                id: t.StringC;
                level: t.NumberC;
                overwrittenData: t.UnionC<[t.TypeC<{
                    name: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    description: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    prefabKey: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>;
                    attributes: t.TypeC<{
                        maxHp: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        atk: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        def: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        magicResistance: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        cost: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        blockCnt: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        moveSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        attackSpeed: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseAttackTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        respawnTime: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        hpRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        spRecoveryPerSec: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        maxDeployCount: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        massLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        baseForceLevel: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>;
                        tauntLevel: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epDamageResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        epResistance: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.UnionC<[t.NumberC, t.NullC]>;
                        }>, t.UndefinedC]>;
                        stunImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        silenceImmune: t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>;
                        sleepImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        frozenImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                        levitateImmune: t.UnionC<[t.TypeC<{
                            m_defined: t.BooleanC;
                            m_value: t.BooleanC;
                        }>, t.UndefinedC]>;
                    }>;
                    applyWay: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    motion: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    enemyTags: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.ArrayC<t.StringC>, t.NullC]>;
                    }>, t.UndefinedC]>;
                    lifePointReduce: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    levelType: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.StringC, t.NullC]>;
                    }>, t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    rangeRadius: t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>;
                    numOfExtraDrops: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    viewRadius: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.UnionC<[t.NumberC, t.NullC]>;
                    }>, t.UndefinedC]>;
                    notCountInTotal: t.UnionC<[t.TypeC<{
                        m_defined: t.BooleanC;
                        m_value: t.BooleanC;
                    }>, t.UndefinedC]>;
                    talentBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC]>;
                    skills: t.UnionC<[t.ArrayC<t.TypeC<{
                        prefabKey: t.StringC;
                        priority: t.NumberC;
                        cooldown: t.NumberC;
                        initCooldown: t.NumberC;
                        spCost: t.NumberC;
                        blackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                            key: t.StringC;
                            value: t.UnionC<[t.NumberC, t.NullC]>;
                            valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        }>>, t.NullC]>;
                    }>>, t.NullC]>;
                    spData: t.UnionC<[t.TypeC<{
                        spType: t.StringC;
                        maxSp: t.NumberC;
                        initSp: t.NumberC;
                        increment: t.NumberC;
                    }>, t.NullC]>;
                }>, t.NullC]>;
            }>>;
            waves: t.ArrayC<t.TypeC<{
                preDelay: t.NumberC;
                postDelay: t.NumberC;
                maxTimeWaitingForNextWave: t.NumberC;
                fragments: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
                advancedWaveTag: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            }>>;
            branches: t.UnionC<[t.RecordC<t.StringC, t.TypeC<{
                phases: t.ArrayC<t.TypeC<{
                    preDelay: t.NumberC;
                    actions: t.ArrayC<t.TypeC<{
                        actionType: t.UnionC<[t.StringC, t.NumberC]>;
                        managedByScheduler: t.BooleanC;
                        key: t.StringC;
                        count: t.NumberC;
                        preDelay: t.NumberC;
                        interval: t.NumberC;
                        routeIndex: t.NumberC;
                        blockFragment: t.BooleanC;
                        autoPreviewRoute: t.BooleanC;
                        autoDisplayEnemyInfo: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isUnharmfulAndAlwaysCountAsKilled: t.BooleanC;
                        hiddenGroup: t.UnionC<[t.StringC, t.NullC]>;
                        randomSpawnGroupKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomSpawnGroupPackKey: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                        randomType: t.UnionC<[t.StringC, t.NumberC, t.UndefinedC]>;
                        weight: t.UnionC<[t.NumberC, t.UndefinedC]>;
                        dontBlockWave: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        isValid: t.UnionC<[t.BooleanC, t.UndefinedC]>;
                        extraMeta: t.UnionC<[t.NullC, t.UndefinedC]>;
                    }>>;
                }>>;
            }>>, t.NullC]>;
            predefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC]>;
            hardPredefines: t.UnionC<[t.TypeC<{
                characterInsts: t.ArrayC<t.AnyC>;
                tokenInsts: t.ArrayC<t.TypeC<{
                    position: t.TypeC<{
                        row: t.NumberC;
                        col: t.NumberC;
                    }>;
                    direction: t.UnionC<[t.StringC, t.NumberC]>;
                    hidden: t.BooleanC;
                    alias: t.UnionC<[t.StringC, t.NullC]>;
                    uniEquipIds: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        level: t.NumberC;
                    }>>, t.NullC, t.UndefinedC]>;
                    inst: t.TypeC<{
                        characterKey: t.StringC;
                        level: t.NumberC;
                        phase: t.UnionC<[t.StringC, t.NumberC]>;
                        favorPoint: t.NumberC;
                        potentialRank: t.NumberC;
                    }>;
                    skillIndex: t.NumberC;
                    mainSkillLvl: t.NumberC;
                    skinId: t.UnionC<[t.StringC, t.NullC]>;
                    tmplId: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    overrideSkillBlackboard: t.UnionC<[t.ArrayC<t.TypeC<{
                        key: t.StringC;
                        value: t.UnionC<[t.NumberC, t.NullC]>;
                        valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                    }>>, t.NullC, t.UndefinedC]>;
                }>>;
                characterCards: t.ArrayC<t.AnyC>;
                tokenCards: t.ArrayC<t.AnyC>;
            }>, t.NullC, t.UndefinedC]>;
            excludeCharIdList: t.NullC;
            randomSeed: t.NumberC;
            operaConfig: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
            runtimeData: t.UnionC<[t.NullC, t.UndefinedC]>;
        }>;
    }>, t.NullC]>;
    data: t.TypeC<{
        name: t.StringC;
        description: t.StringC;
        canUseGeneralPotentialItem: t.BooleanC;
        potentialItemId: t.UnionC<[t.StringC, t.NullC]>;
        nationId: t.UnionC<[t.StringC, t.NullC]>;
        groupId: t.UnionC<[t.StringC, t.NullC]>;
        teamId: t.UnionC<[t.StringC, t.NullC]>;
        displayNumber: t.UnionC<[t.StringC, t.NullC]>;
        appellation: t.StringC;
        position: t.StringC;
        tagList: t.ArrayC<t.StringC>;
        itemUsage: t.UnionC<[t.StringC, t.NullC]>;
        itemDesc: t.UnionC<[t.StringC, t.NullC]>;
        itemObtainApproach: t.UnionC<[t.StringC, t.NullC]>;
        isNotObtainable: t.BooleanC;
        isSpChar: t.BooleanC;
        maxPotentialLevel: t.NumberC;
        rarity: t.StringC;
        profession: t.StringC;
        subProfessionId: t.StringC;
        trait: t.UnionC<[t.TypeC<{
            candidates: t.ArrayC<t.TypeC<{
                unlockCondition: t.TypeC<{
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    level: t.NumberC;
                }>;
                requiredPotentialRank: t.NumberC;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
                overrideDescripton: t.UnionC<[t.StringC, t.NullC]>;
                prefabKey: t.UnionC<[t.StringC, t.NullC]>;
                rangeId: t.UnionC<[t.StringC, t.NullC]>;
            }>>;
        }>, t.NullC]>;
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
            evolveCost: t.UnionC<[t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>, t.NullC]>;
        }>>;
        skills: t.ArrayC<t.TypeC<{
            skillId: t.StringC;
            overridePrefabKey: t.UnionC<[t.StringC, t.NullC]>;
            overrideTokenKey: t.UnionC<[t.StringC, t.NullC]>;
            levelUpCostCond: t.ArrayC<t.TypeC<{
                unlockCond: t.TypeC<{
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    level: t.NumberC;
                }>;
                lvlUpTime: t.NumberC;
                levelUpCost: t.UnionC<[t.ArrayC<t.TypeC<{
                    id: t.StringC;
                    count: t.NumberC;
                    type: t.StringC;
                }>>, t.NullC]>;
            }>>;
            unlockCond: t.TypeC<{
                phase: t.UnionC<[t.StringC, t.NumberC]>;
                level: t.NumberC;
            }>;
        }>>;
        talents: t.UnionC<[t.ArrayC<t.TypeC<{
            candidates: t.ArrayC<t.TypeC<{
                unlockCondition: t.TypeC<{
                    phase: t.UnionC<[t.StringC, t.NumberC]>;
                    level: t.NumberC;
                }>;
                requiredPotentialRank: t.NumberC;
                prefabKey: t.StringC;
                name: t.StringC;
                description: t.StringC;
                rangeId: t.UnionC<[t.StringC, t.NullC]>;
                blackboard: t.ArrayC<t.TypeC<{
                    key: t.StringC;
                    value: t.UnionC<[t.NumberC, t.NullC]>;
                    valueStr: t.UnionC<[t.StringC, t.NullC, t.UndefinedC]>;
                }>>;
            }>>;
        }>>, t.NullC]>;
        potentialRanks: t.ArrayC<t.TypeC<{
            type: t.StringC;
            description: t.StringC;
            buff: t.UnionC<[t.TypeC<{
                attributes: t.TypeC<{
                    abnormalFlags: t.NullC;
                    abnormalImmunes: t.NullC;
                    abnormalAntis: t.NullC;
                    abnormalCombos: t.NullC;
                    abnormalComboImmunes: t.NullC;
                    attributeModifiers: t.ArrayC<t.TypeC<{
                        attributeType: t.StringC;
                        formulaItem: t.StringC;
                        value: t.NumberC;
                        loadFromBlackboard: t.BooleanC;
                        fetchBaseValueFromSourceEntity: t.BooleanC;
                    }>>;
                }>;
            }>, t.NullC]>;
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
                phase: t.UnionC<[t.StringC, t.NumberC]>;
                level: t.NumberC;
            }>;
            lvlUpCost: t.UnionC<[t.ArrayC<t.TypeC<{
                id: t.StringC;
                count: t.NumberC;
                type: t.StringC;
            }>>, t.NullC]>;
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
