var actionfunctions:string[] = [
"A_AlertMonsters",
"A_Burst",
"A_CentaurDefend",
"A_Chase",
"A_CheckForResurrection",
"A_ClearLastHeard",
"A_ClearSoundTarget",
"A_ClearTarget",
"A_DamageChildren",
"A_DamageMaster",
"A_DamageSelf",
"A_DamageSiblings",
"A_DamageTarget",
"A_DamageTracer",
"A_Die",
"A_ExtChase",
"A_FaceMaster",
"A_FaceTarget",
"A_FaceTracer",
"A_FastChase",
"A_KillChildren",
"A_KillMaster",
"A_KillSiblings",
"A_KillTarget",
"A_KillTracer",
"A_Look",
"A_Look2",
"A_LookEx",
"A_RaiseChildren",
"A_RaiseMaster",
"A_RaiseSelf",
"A_RaiseSiblings",
"A_RemoveChildren",
"A_RemoveMaster",
"A_RemoveSiblings",
"A_RemoveTarget",
"A_RemoveTracer",
"A_Remove",
"A_SentinelBob",
"A_Teleport",
"A_TurretLook",
"A_VileChase",
"A_Wander",
"A_BasicAttack",
"A_BulletAttack",
"A_ComboAttack",
"A_CustomMissile",
"A_CustomBulletAttack",
"A_CustomRailgun",
"A_CustomMeleeAttack",
"A_CustomComboAttack",
"A_Detonate",
"A_Explode",
"A_MeleeAttack",
"A_MissileAttack",
"A_MonsterRefire",
"A_MonsterRail",
"A_RadiusDamageSelf",
"A_RadiusThrust",
"A_SpawnProjectile",
"A_ThrowGrenade",
"A_WolfAttack",
"A_FreezeDeath",
"A_GenericFreezeDeath",
"A_FreezeDeathChunks",
"A_IceGuyDie",
"A_PlaySound",
"A_PlaySoundEx",
"A_PlayWeaponSound",
"A_ActiveSound",
"A_LoopActiveSound",
"A_FLoopActiveSound",
"A_StopSound",
"A_StopSoundEx",
"A_SoundPitch",
"A_SoundVolume",
"A_Pain",
"A_Scream",
"A_XScream",
"A_PlayerScream",
"A_VileStart",
"A_BrainPain",
"A_BrainAwake",
"A_BFGSound",
"A_Print",
"A_PrintBold",
"A_Log",
"A_LogFloat",
"A_LogInt",
"A_BossDeath",
"A_KeenDie",
"A_BrainDie",
"A_GetHurt",
"A_KlaxonBlare",
"A_CheckTerrain",
"A_SetBlend",
"A_CheckPlayerDone",
"A_PlayerSkinCheck",
"A_SkullPop",
"A_SprayDecal",
"A_Quake",
"A_QuakeEx",
"A_CopySpriteFrame",
"A_SetSpriteAngle",
"A_SetSpriteRotation",
"A_TossGib",
"A_SpawnDebris",
"A_SpawnItem",
"A_SpawnItemEx",
"A_SpawnParticle",
"A_CheckBlock",
"A_CheckCeiling",
"A_CheckFloor",
"A_CheckFlag",
"A_CheckLOF",
"A_CheckProximity",
"A_CheckRange",
"A_CheckSight",
"A_CheckSightOrRange",
"A_CheckSpecies",
"A_Jump",
"A_JumpIf",
"A_JumpIfArmorType",
"A_JumpIfCloser",
"A_JumpIfHealthLower",
"A_JumpIfHigherOrLower",
"A_JumpIfInventory",
"A_JumpIfInTargetInventory",
"A_JumpIfInTargetLOS",
"A_JumpIfMasterCloser",
"A_JumpIfNoAmmo",
"A_JumpIfTargetInLOS",
"A_JumpIfTargetInsideMeleeRange",
"A_JumpIfTargetOutsideMeleeRange",
"A_JumpIfTracerCloser",
"A_ActiveAndUnblock",
"A_ChangeCountFlags",
"A_ChangeFlag",
"A_ChangeVelocity",
"A_ClearShadow",
"A_CopyFriendliness",
"A_DeQueueCorpse",
"A_FadeIn",
"A_FadeOut",
"A_FadeTo",
"A_FaceMovementDirection",
"A_Fall",
"A_Gravity",
"A_HideThing",
"A_LowGravity",
"A_Morph",
"A_NoBlocking",
"A_NoGravity",
"A_QueueCorpse",
"A_RearrangePointers",
"A_ResetHealth",
"A_Respawn",
"A_ScaleVelocity",
"A_ScreamAndUnblock",
"A_SetAngle",
"A_SetArg",
"A_SetChaseThreshold",
"A_SetDamageType",
"A_SetFloat",
"A_SetFloatSpeed",
"A_SetFloatBobPhase",
"A_SetFloorClip",
"A_SetGravity",
"A_SetHealth",
"A_SetInvulnerable",
"A_SetMass",
"A_SetMugshotState",
"A_SetPainThreshold",
"A_SetPitch",
"A_SetReflective",
"A_SetReflectiveInvulnerable",
"A_SetRenderStyle",
"A_SetRipperLevel",
"A_SetRipMin",
"A_SetRipMax",
"A_SetRoll",
"A_SetScale",
"A_SetShadow",
"A_SetShootable",
"A_SetSize",
"A_SetSolid",
"A_SetSpecial",
"A_SetSpecies",
"A_SetSpeed",
"A_SetTeleFog",
"A_SetTics",
"A_SetTranslucent",
"A_SetUserArray",
"A_SetUserArrayFloat",
"A_SetUserVar",
"A_SetUserVarFloat",
"A_SetTranslation",
"A_SetVisibleRotation",
"A_SwapTeleFog",
"A_TransferPointer",
"A_UnHideThing",
"A_UnsetFloat",
"A_UnSetFloorClip",
"A_UnSetInvulnerable",
"A_UnSetReflective",
"A_UnSetReflectiveInvulnerable",
"A_UnSetShootable",
"A_UnsetSolid",
"A_SeekerMissile",
"A_Tracer",
"A_Tracer2",
"A_FaceTracer",
"A_Fire",
"A_BishopMissileWeave",
"A_CStaffMissileSlither",
"A_Weave",
"A_Warp",
"A_Countdown",
"A_CountdownArg",
"A_Stop",
"A_DropInventory",
"A_DropItem",
"A_GiveInventory",
"A_GiveToChildren",
"A_GiveToSiblings",
"A_GiveToTarget",
"A_TakeInventory",
"A_TakeFromChildren",
"A_TakeFromSiblings",
"A_TakeFromTarget",
"A_SelectWeapon",
"A_SetInventory",
"A_RadiusGive",
"A_WeaponReady",
"A_WeaponOffset",
"A_Lower",
"A_Raise",
"A_ReFire",
"A_ClearReFire",
"A_GunFlash",
"A_CheckReload",
"A_CheckForReload",
"A_CheckRailReload",
"A_ResetReloadCounter",
"A_Light",
"A_Light0",
"A_Light1",
"A_Light2",
"A_LightInverse",
"A_ClearOverlays",
"A_Overlay",
"A_OverlayFlags",
"A_OverlayOffset",
"A_OverlayRenderstyle",
"A_OverlayAlpha",
"A_Recoil",
"A_ZoomFactor",
"A_SetCrosshair",
"A_CustomPunch",
"A_FireBullets",
"A_FireCustomMissile",
"A_FireProjectile",
"A_FireAssaultGun",
"A_FireBFG",
"A_FireOldBFG",
"A_FirePistol",
"A_FireShotgun",
"A_FireShotgun2",
"A_FireCGun",
"A_FireMissile",
"A_FirePlasma",
"A_FireSTGrenade",
"A_Punch",
"A_RailAttack",
"A_Saw",
"ACS_NamedExecute",
"ACS_NamedSuspend",
"ACS_NamedTerminate",
"ACS_NamedLockedExecute",
"ACS_NamedLockedExecuteDoor",
"ACS_NamedExecuteWithResult",
"ACS_NamedExecuteAlways",
"A_PosAttack",
"A_SPosAttack",
"A_CPosAttack",
"A_CPosRefire",
"A_SpidRefire",
"A_TroopAttack",
"A_SargAttack",
"A_HeadAttack",
"A_BruisAttack",
"A_SkullAttack",
"A_BspiAttack",
"A_CyberAttack",
"A_PainAttack",
"A_DualPainAttack",
"A_PainDie",
"A_SkelFist",
"A_SkelMissile",
"A_FatAttack1",
"A_FatAttack2",
"A_FatAttack3",
"A_VileTarget",
"A_VileAttack",
"A_BrainSpit",
"A_SpawnFly",
"A_SpawnSound",
"A_BrainScream",
"A_BrainExplode",
"A_Mushroom",
"A_M_Saw",
"A_SentinelRefire",
"A_BetaSkullAttack",
"A_Hoof",
"A_Metal",
"A_BabyMetal",
"A_FatRaise",
"A_SkelWhoosh",
"A_StartFire",
"A_FireCrackle",
"A_BFGSpray",
"A_BarrelDestroy",
]; export { actionfunctions };
