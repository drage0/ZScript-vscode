var actorfunctions_details:string[] = [
"void VelFromAngle(double speed = 0, double angle = 0)",
"void Vel3DFromAngle(double speed, double angle, double pitch)",
"double absangle(double ang1, double ang2)",
"double BobSin(double fb)",
"double deltaangle(double ang1, double ang2)",
"Vector2 AngleToVector(double angle, double length = 1)",
"Vector2 RotateVector(Vector2 vec, double angle)",
"Vector2 Vec2To(Actor other)",
"Vector3 Vec3To(Actor other)",
"Vector3 Vec3Offset(double x, double y, double z, bool absolute = false)",
"Vector3 Vec3Angle(double length, double angle, double z = 0, bool absolute = false)",
"Vector2 Vec2Angle(double length, double angle, bool absolute = false)",
"Vector2 Vec2Offset(double x, double y, bool absolute = false)",
"Vector3 Vec2OffsetZ(double x, double y, double atz, bool absolute = false)",
"bool CanRaise()",
"bool CheckClass(class<Actor> checkclass, int ptr_select = AAPTR_DEFAULT, bool match_superclass = false)",
"bool CheckSight(Actor target, int flags = 0)",
"bool CheckIfSeen()",
"bool CheckIfTargetInLOS(double fov = 0, int flags = 0, double dist_max = 0, double dist_close = 0)",
"bool CheckIfInTargetLOS(double fov = 0, int flags = 0, double dist_max = 0, double dist_close = 0)",
"bool CheckLOF(int flags = 0, double range = 0, double minrange = 0, double angle = 0, double pitch = 0, double offsetheight = 0, double offsetwidth = 0, int ptr_target = AAPTR_DEFAULT, double offsetforward = 0)",
"bool CheckSightOrRange(double distance, bool two_dimension = false)",
"bool CheckRange(double distance, bool two_dimension = false)",
"bool CheckIfCloser(Actor targ, double dist, bool noz = false)",
"bool CheckProximity(class<Actor> classname, double distance, int count = 1, int flags = 0, int ptr = AAPTR_DEFAULT)",
"bool CheckBlock(int flags = 0, int ptr = AAPTR_DEFAULT, double xofs = 0, double yofs = 0, double zofs = 0, double angle = 0)",
"bool IsVisible(Actor other, bool allaround, LookExParams params = null)",
"bool CheckPosition(Vector2 pos, bool actorsonly = false)",
"bool IsPointerEqual(int ptr_select1, int ptr_select2)",
"bool CheckMissileSpawn(double maxdist)",
"bool TestMobjLocation()",
"bool HitFloor()",
"bool HitWater(sector sec, Vector3 pos, bool checkabove = false, bool alert = true, bool force = false)",
"bool PlayerSkinCheck()",
"bool CheckArmorType(name Type, int amount = 1)",
"bool CheckLocalView(int consoleplayer)",
"bool IsZeroDamage()",
"name GetClassName()",
"string GetTag(string defstr = \"\")",
"name GetSpecies()",
"int PlayerNumber()",
"string GetUserName()",
"int SpawnHealth()",
"static double GetDefaultSpeed(class<Actor> type)",
"static struct[?] GetDefaultByType(class<Actor> type)",
"double GetCameraHeight()",
"clearscope double GetGravity() const",
"bool CountsAsKill()",
"int GetMissileDamage(int mask, int add, int ptr = AAPTR_DEFAULT)",
"int GetModifiedDamage(Name damagetype, int damage, bool passive)",
"static class<Actor> GetSpawnableType(int spawnnum)",
"static int GetSpriteIndex(name sprt)",
"Actor GetPointer(int aaptr)",
"double Distance2D(Actor other)",
"double Distance3D(Actor other)",
"double DistanceBySpeed(Actor other, double speed)",
"double AngleTo(Actor target, bool absolute = false)",
"Actor AimTarget()",
"bool LineTrace(double angle, double distance, double pitch, int flags = 0, double offsetz = 0., double offsetforward = 0., doubl offsetside = 0., out FLineTraceData data = null)",
"float AccuracyFactor()",
"DropItem GetDropItems()",
"void FindFloorCeiling(int flags = 0)",
"TerrainDef GetFloorTerrain()",
"double, double GetFriction()",
"bool, Actor TestMobjZ(bool quick = false)",
"double GetBobOffset(double frac = 0)",
"Actor RoughMonsterSearch(int distance, bool onlyseekable = false, bool frontonly = false)",
"static int FindUniqueTid(int start = 0, int limit = 0)",
"clearscope int GetRenderStyle() const",
"static class<Actor> GetReplacement(class<Actor> cls)",
"static class<Actor> GetReplacee(class<Actor> cls)",
"clearscope int GetLevelSpawnTime() const",
"clearscope int GetAge() const",
"int GetRadiusDamage(Actor thing, int damage, int distance, int fulldmgdistance = 0, bool oldradiusdmg = false)",
"void SetTag(string defstr = \"\")",
"void ChangeTid(int newtid)",
"void SetDamage(int dmg)",
"int ApplyDamageFactor(Name damagetype, int damage)",
"static int ApplyDamageFactors(class<Inventory> itemcls, Name damagetype, int damage, int defdamage)",
"void RestoreDamage()",
"void RestoreRenderStyle()",
"void SetShade(color col)",
"void ClearCounters()",
"void AdjustFloorClip()",
"void ClearBounce()",
"bool GiveBody(int num, int max=0)",
"void SetFriendPlayer(PlayerInfo player)",
"void ExplodeMissile(line lin = null, Actor target = null)",
"void SetIdle(bool nofunction = false)",
"void RemoveFromHash()",
"void LinkToWorld()",
"void UnlinkFromWorld()",
"void A_ChangeLinkFlags(int blockmap = FLAG_NO_CHANGE, int sector = FLAG_NO_CHANGE)",
"void CopyFriendliness(Actor other, bool changeTarget, bool resetHealth = true)",
"void DrawSplash(int count, double angle, int kind)",
"void GiveSecret(bool printmsg = true, bool playsound = true)",
"void A_Face(Actor faceto, double max_turn = 0, double max_pitch = 270, double ang_offset = 0, double pitch_offset = 0, int flags = 0 double z_add = 0)",
"void Revive()",
"bool RaiseActor(Actor other, int flags = 0)",
"static Actor Spawn(class<Actor> type, vector3 pos = (0,0,0), int replace = NO_REPLACE)",
"void SpawnTeleportFog(Vector3 pos, bool beforeTele, bool setTarget)",
"void SpawnBlood(Vector3 pos1, double dir, int damage)",
"void BloodSplatter(Vector3 pos, double hitangle, bool axe = false)",
"void SpawnDirt(double radius)",
"state FindState(statelabel st, bool exact = false)",
"bool InStateSequence(State newstate, State basestate)",
"bool SetState(state st, bool nofunction = false)",
"bool SetStateLabel(statelabel st, bool nofunction = false) { return SetState(FindState(st), nofunction) }",
"action state ResolveState(statelabel st) //this one, unlike FindState, is context aware.",
"void SetOrigin(vector3 newpos, bool moving)",
"void SetXYZ(vector3 newpos)",
"bool Teleport(Vector3 pos, double angle, int flags)",
"bool TeleportMove(Vector3 pos, bool telefrag, bool modifyactor = true)",
"void AddZ(double zadd, bool moving = true)",
"void SetZ(double z)",
"void Thrust(double speed = 0, double angle = 0)",
"bool SinkMobj(double speed)",
"bool RaiseMobj(double speed)",
"bool LookForMonsters()",
"bool LookForTid(bool allaround, LookExParams params = null)",
"bool LookForEnemies(bool allaround, LookExParams params = null)",
"bool LookForPlayers(bool allaround, LookExParams params = null)",
"bool MonsterMove()",
"bool TryWalk()",
"bool TryMove(vector2 newpos, int dropoff, bool missilecheck = false, FCheckPosition tm = null)",
"bool CheckMove(vector2 newpos, int flags = 0, FCheckPosition tm = null)",
"void NewChaseDir()",
"void RandomChaseDir()",
"bool CheckMeleeRange()",
"bool CheckMeleeRange2()",
"bool CheckMissileRange()",
"bool isFriend(Actor other)",
"bool isHostile(Actor other)",
"bool isTeammate(Actor other)",
"bool HitFriend()",
"bool CheckBossDeath()",
"void SoundAlert(Actor target, bool splash = false, double maxdist = 0)",
"void DaggerAlert(Actor target)",
"void PlaySpawnSound(Actor missile)",
"void PlayActiveSound()",
"void Howl()",
"Actor OldSpawnMissile(Actor dest, class<Actor> type, Actor owner = null)",
"Actor SpawnMissile(Actor dest, class<Actor> type, Actor owner = null)",
"Actor SpawnMissileXYZ(Vector3 pos, Actor dest, Class<Actor> type, bool checkspawn = true, Actor owner = null)",
"Actor SpawnMissileZ(double z, Actor dest, class<Actor> type)",
"Actor SpawnMissileAngleZSpeed(double z, class<Actor> type, double angle, double vz, double speed, Actor owner = null, bool checkspawn = true)",
"Actor SpawnMissileZAimed(double z, Actor dest, Class<Actor> type)",
"Actor SpawnMissileAngle(class<Actor> type, double angle, double vz)",
"Actor SpawnMissileAngleZ(double z, class<Actor> type, double angle, double vz)",
"Actor SpawnSubMissile(Class<Actor> type, Actor target)",
"Actor, Actor SpawnPlayerMissile(class<Actor> type, double angle = 0, double x = 0, double y = 0, double z = 0, out FTranslatedLineTarget pLineTarget = null, bool nofreeaim = false, *bool noautoaim = false, int aimflags = 0)",
"bool CanSeek(Actor target)",
"double BulletSlope(out FTranslatedLineTarget pLineTarget = null, int aimflags = 0)",
"double AimLineAttack(double angle, double distance, out FTranslatedLineTarget pLineTarget = null, double vrange = 0., int flags = 0, Actor target = null, Actor friender = null)",
"Actor, int LineAttack(double angle, double distance, double pitch, int damage, Name damageType, class<Actor> pufftype, int flags = 0, out FTranslatedLineTarget victim = null, double offsetz = 0., double offsetforward = 0., double offsetside = 0.)",
"Actor SpawnPuff(class<Actor> pufftype, vector3 pos, double hitdir, double particledir, int updown, int flags = 0, Actor victim = null)",
"int DamageMobj(Actor inflictor, Actor source, int damage, Name mod, int flags = 0, double angle = 0)",
"void PoisonMobj(Actor inflictor, Actor source, int damage, int duration, int period, Name type)",
"void TraceBleed(int damage, Actor missile)",
"void TraceBleedAngle(int damage, double angle, double pitch)",
"bool CheckInventory(class<Inventory> itemtype, int itemamount, int owner = AAPTR_DEFAULT)",
"void AddInventory(Inventory inv)",
"void RemoveInventory(Inventory inv)",
"void ClearInventory()",
"clearscope Inventory FindInventory(class<Inventory> itemtype, bool subclass = false) const",
"Inventory GiveInventoryType(class<Inventory> itemtype)",
"Inventory DropInventory(Inventory item, int amt = -1)",
"bool UseInventory(Inventory item)",
"bool GiveAmmo(Class<Ammo> type, int amount)",
]; var actorfunctions:string[] = [
"VelFromAngle",
"Vel3DFromAngle",
"absangle",
"BobSin",
"deltaangle",
"AngleToVector",
"RotateVector",
"Vec2To",
"Vec3To",
"Vec3Offset",
"Vec3Angle",
"Vec2Angle",
"Vec2Offset",
"Vec2OffsetZ",
"CanRaise",
"CheckClass",
"CheckSight",
"CheckIfSeen",
"CheckIfTargetInLOS",
"CheckIfInTargetLOS",
"CheckLOF",
"CheckSightOrRange",
"CheckRange",
"CheckIfCloser",
"CheckProximity",
"CheckBlock",
"IsVisible",
"CheckPosition",
"IsPointerEqual",
"CheckMissileSpawn",
"TestMobjLocation",
"HitFloor",
"HitWater",
"PlayerSkinCheck",
"CheckArmorType",
"CheckLocalView",
"IsZeroDamage",
"GetClassName",
"GetTag",
"GetSpecies",
"PlayerNumber",
"GetUserName",
"SpawnHealth",
"GetDefaultSpeed",
"GetDefaultByType",
"GetCameraHeight",
"GetGravity",
"CountsAsKill",
"GetMissileDamage",
"GetModifiedDamage",
"GetSpawnableType",
"GetSpriteIndex",
"GetPointer",
"Distance2D",
"Distance3D",
"DistanceBySpeed",
"AngleTo",
"AimTarget",
"LineTrace",
"AccuracyFactor",
"GetDropItems",
"FindFloorCeiling",
"GetFloorTerrain",
"GetFriction",
"TestMobjZ",
"GetBobOffset",
"RoughMonsterSearch",
"FindUniqueTid",
"GetRenderStyle",
"GetReplacement",
"GetReplacee",
"GetLevelSpawnTime",
"GetAge",
"GetRadiusDamage",
"SetTag",
"ChangeTid",
"SetDamage",
"ApplyDamageFactor",
"ApplyDamageFactors",
"RestoreDamage",
"RestoreRenderStyle",
"SetShade",
"ClearCounters",
"AdjustFloorClip",
"ClearBounce",
"GiveBody",
"SetFriendPlayer",
"ExplodeMissile",
"SetIdle",
"RemoveFromHash",
"LinkToWorld",
"UnlinkFromWorld",
"A_ChangeLinkFlags",
"CopyFriendliness",
"DrawSplash",
"GiveSecret",
"A_Face",
"Revive",
"RaiseActor",
"Spawn",
"SpawnTeleportFog",
"SpawnBlood",
"BloodSplatter",
"SpawnDirt",
"FindState",
"InStateSequence",
"SetState",
"SetStateLabel",
"ResolveState",
"SetOrigin",
"SetXYZ",
"Teleport",
"TeleportMove",
"AddZ",
"SetZ",
"Thrust",
"SinkMobj",
"RaiseMobj",
"LookForMonsters",
"LookForTid",
"LookForEnemies",
"LookForPlayers",
"MonsterMove",
"TryWalk",
"TryMove",
"CheckMove",
"NewChaseDir",
"RandomChaseDir",
"CheckMeleeRange",
"CheckMeleeRange2",
"CheckMissileRange",
"isFriend",
"isHostile",
"isTeammate",
"HitFriend",
"CheckBossDeath",
"SoundAlert",
"DaggerAlert",
"PlaySpawnSound",
"PlayActiveSound",
"Howl",
"OldSpawnMissile",
"SpawnMissile",
"SpawnMissileXYZ",
"SpawnMissileZ",
"SpawnMissileAngleZSpeed",
"SpawnMissileZAimed",
"SpawnMissileAngle",
"SpawnMissileAngleZ",
"SpawnSubMissile",
"SpawnPlayerMissile",
"CanSeek",
"BulletSlope",
"AimLineAttack",
"LineAttack",
"SpawnPuff",
"DamageMobj",
"PoisonMobj",
"TraceBleed",
"TraceBleedAngle",
"CheckInventory",
"AddInventory",
"RemoveInventory",
"ClearInventory",
"FindInventory",
"GiveInventoryType",
"DropInventory",
"UseInventory",
"GiveAmmo",
]; export { actorfunctions, actorfunctions_details };