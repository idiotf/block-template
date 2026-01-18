declare class EntryObject {
	name: string;
}
declare class EntityObject {
	parent: EntryObject;
}
interface EntryHardwareBlockModule {
	setLanguage(): Record<string, Record<string, Record<string, unknown>>>;
}
declare class EntryModuleLoader {
	setLanguageTemplates(moduleObject: EntryHardwareBlockModule): void;
	loadBlocks(blocks: {
		categoryName: string;
		blockSchemas: EntryBlockRegisterSchema[];
	}): void;
}
interface EntryBlockRegisterSchema {
	blockName: string;
	block: EntryBlock;
	isBlockShowBlockMenu?: boolean;
}
declare class BlockMenu {
	_categoryData: CategoryData[];
	_generateCategoryView(categoryData: CategoryData[]): void;
	_generateCategoryCode(category: string): void;
	setMenu(): void;
}
interface CategoryData {
	category: string;
	blocks: string[];
	visible?: boolean;
}
declare class Playground {
	blockMenu?: BlockMenu;
}
declare function getAllBlocks(): CategoryData$1[];
declare const colorSet: {
	arrow: Record<keyof ColorSet, Record<string, string>>;
	block: Record<keyof ColorSet, Record<string, string>>;
	common: {
		ALERT: string;
		BUTTON: string;
		BUTTON_BACKGROUND: string;
		BUTTON_BACKGROUND_DISABLED: string;
		BUTTON_DISABLED: string;
		DARK: string;
		GRAY: string;
		TEXT: string;
		TRANSPARENT: string;
		WHITE: string;
	};
};
interface CategoryData$1 {
	category: string;
	blocks: string[];
}
interface ColorSet {
	default: string;
	darken: string;
	lighten: string;
	emphasize: string;
}
declare const STATIC: {
	/* data type */
	OBJECT: 0;
	ENTITY: 1;
	SPRITE: 2;
	SOUND: 3;
	VARIABLE: 4;
	FUNCTION: 5;
	SCENE: 6;
	MESSAGE: 7;
	BLOCK_MODEL: 8;
	BLOCK_RENDER_MODEL: 9;
	BOX_MODEL: 10;
	THREAD_MODEL: 11;
	DRAG_INSTANCE: 12;
	/* block state */
	BLOCK_STATIC: 0;
	BLOCK_MOVE: 1;
	BLOCK_FOLLOW: 2;
	/* execute return state */
	RETURN: 0;
	CONTINUE: 1;
	BREAK: 2;
	PASS: 3;
	//if command type number > 500
	//undo redo not working for usual workspace
	//but recorded and validated in guide
	COMMAND_TYPES_ALWAYS: {
		sceneAdd: 1;
		sceneRemove: 2;
		sceneRename: 3;
		sceneSort: 4;
		sceneSelect: 5;
		addThread: 101;
		destroyThread: 102;
		destroyBlock: 103;
		recoverBlock: 104;
		insertBlock: 105;
		separateBlock: 106;
		moveBlock: 107;
		cloneBlock: 108;
		uncloneBlock: 109;
		scrollBoard: 110;
		setFieldValue: 111;
		selectBlockMenu: 112;
		destroyBlockBelow: 113;
		destroyThreads: 114;
		addThreads: 115;
		recoverBlockBelow: 116;
		addThreadFromBlockMenu: 117;
		insertBlockFromBlockMenu: 118;
		moveBlockFromBlockMenu: 119;
		separateBlockForDestroy: 120;
		moveBlockForDestroy: 121;
		insertBlockFromBlockMenuFollowSeparate: 122;
		insertBlockFollowSeparate: 123;
		separateBlockByCommand: 124;
		selectObject: 201;
		objectEditButtonClick: 202;
		objectAddPicture: 203;
		objectRemovePicture: 204;
		objectAddSound: 205;
		objectRemoveSound: 206;
		objectNameEdit: 207;
		addObject: 208;
		removeObject: 209;
		objectUpdatePosX: 211;
		objectUpdatePosY: 212;
		objectUpdateSize: 213;
		objectUpdateRotationValue: 214;
		objectUpdateDirectionValue: 215;
		objectUpdateRotateMethod: 216;
		entitySetModel: 217;
		objectAddExpansionBlocks: 218;
		objectRemoveExpansionBlocks: 219;
		objectReorder: 220;
		objectAddAIUtilizeBlocks: 221;
		objectRemoveAIUtilizeBlocks: 222;
		objectAddHardwareLiteBlocks: 223;
		objectRemoveHardwareLiteBlocks: 224;
		do: 301;
		undo: 302;
		redo: 303;
		editPicture: 401;
		uneditPicture: 402;
		processPicture: 403;
		unprocessPicture: 404;
		editText: 405;
		variableContainerAddMessage: 807;
		variableContainerRemoveMessage: 808;
		funcEditStart: 1001;
		funcEditEnd: 1002;
		funcRemove: 1003;
		funcCreate: 1004;
		funcChangeType: 1005;
		funcLocalVarChangeLength: 1006;
		toggleFuncUseLocalVariables: 1007;
		insertFuncLocalVariable: 1008;
		removeFuncLocalVariableByIndex: 1009;
		createComment: 1201;
		removeComment: 1202;
		showAllComment: 1203;
		hideAllComment: 1204;
		moveComment: 1205;
		toggleComment: 1206;
		cloneComment: 1207;
		uncloneComment: 1208;
		separateComment: 1209;
		connectComment: 1210;
		writeComment: 1211;
		dataTableAddSource: 1301;
		dataTableRemoveSource: 1302;
	};
	COMMAND_TYPES_NOT_ALWAYS: {
		addObjectButtonClick: 210;
		toggleRun: 501;
		toggleStop: 502;
		containerSelectObject: 601;
		playgroundChangeViewMode: 701;
		playgroundClickAddPicture: 702;
		playgroundClickAddSound: 703;
		playgroundClickAddPictureCancel: 704;
		playgroundClickAddSoundCancel: 705;
		playgroundClickAddTable: 706;
		playgroundClickAddTableCancel: 707;
		variableContainerSelectFilter: 801;
		variableContainerClickVariableAddButton: 802;
		variableContainerAddVariable: 803;
		variableContainerRemoveVariable: 804;
		variableAddSetName: 805;
		messageSetName: 806;
		variableAddSetScope: 809;
		variableAddSetCloud: 810;
		variableSetVisibility: 811;
		variableSetDefaultValue: 812;
		variableSetSlidable: 813;
		variableSetMinValue: 814;
		variableSetMaxValue: 815;
		variableContainerClickListAddButton: 816;
		variableContainerAddList: 817;
		variableContainerRemoveList: 818;
		listAddSetName: 819;
		listAddSetScope: 820;
		listAddSetCloud: 821;
		listSetVisibility: 822;
		listChangeLength: 823;
		listSetDefaultValue: 824;
		setMessageEditable: 825;
		setVariableEditable: 826;
		setListEditable: 827;
		variableSetName: 828;
		listSetName: 829;
		variableContainerClickMessageAddButton: 830;
		dismissModal: 900;
		playgroundClickAddExpansionBlock: 1101;
		playgroundClickAddExpansionBlockCancel: 1102;
		playgroundClickAddAIUtilizeBlock: 1103;
		playgroundClickAddAIUtilizeBlockCancel: 1104;
		playgroundClickAddHardwareLiteBlock: 1105;
		playgroundClickAddHardwareLiteBlockCancel: 1106;
	};
	COMMAND_TYPES_CHANGE_CHECK: {
		variableContainerAddVariable: 803;
		variableContainerAddMessage: 807;
		variableContainerAddList: 817;
	};
	RECORDABLE: {
		SUPPORT: 1;
		SKIP: 2;
		ABANDON: 3;
	};
	get COMMAND_TYPES(): typeof STATIC.COMMAND_TYPES_ALWAYS & typeof STATIC.COMMAND_TYPES_NOT_ALWAYS;
	getCommandName(commandType: number): keyof typeof STATIC.COMMAND_TYPES | undefined;
};
declare class Scope<ParamsKey extends string> {
	block: unknown;
	type: string | null; //legacy
	executor: unknown;
	entity?: EntityObject;
	constructor(block: unknown, executor: unknown);
	callReturn(this: this): void;
	getParam(this: this, index: number): unknown;
	// 클래스 레벨에서 한 번만 생성
	static _reservedKeywords: Set<unknown>;
	filterReservedKeywords<T>(this: this, param: T): T | "";
	getParams(this: this): unknown;
	_setBlockState(this: this, fieldBlock: unknown, valueState: unknown): void;
	_setChildBlockState(this: this, fieldBlocks: unknown, currentBlockId: unknown): void;
	getValue(this: this, key: ParamsKey, scope?: this): unknown;
	getValues<const T extends ParamsKey[]>(this: this, keys: T, scope?: this): {
		[K in keyof T]: unknown;
	};
	/**
	 * 일반 getValue 값을 가져오기 전,
	 * 현 Scope 상태에서의 executor.valueMap 을 세팅한다.
	 * 이 로직은 Promise.all[] 과 유사하며, 모든 값이 준비될 때까지 Scope 를 멈춘다.
	 * @param fieldBlocks getValue 에 의한 호출의 경우 1, getValues 의 경우 1 이상
	 */
	_setExecutorValueMap(this: this, fieldBlocks: unknown[]): void;
	getStringValue(this: this, key: ParamsKey, scope?: this): string;
	getNumberValue(this: this, key: ParamsKey, scope?: this): number;
	getBooleanValue(this: this, key: ParamsKey, scope?: this): boolean | number;
	getField(this: this, key: ParamsKey, scope?: this): unknown;
	getStringField(this: this, key: ParamsKey, scope?: this): string;
	getNumberField(this: this, key: ParamsKey, scope?: this): number;
	getStatement(this: this, key: ParamsKey, scope?: this): typeof STATIC.BREAK | typeof STATIC.CONTINUE;
	_getParamIndex(this: this, key: ParamsKey, scope?: this): number;
	_getStatementIndex(this: this, key: ParamsKey, scope?: this): number;
	die(this: this): typeof STATIC.BREAK;
	run(this: this, entity: unknown, isValue?: boolean): unknown;
}
declare class Engine {
	fireEvent(event: string): void;
}
interface VariableMetadata {
	variableType: "stt" | "answer" | "list" | "slide" | "timer" | "variable";
}
declare class Variable {
	static create(variableMetadata: VariableMetadata): Variable;
	getName(): string;
	appendValue(value: unknown): void;
	replaceValue(index: number, value: unknown): void;
	deleteValue(index: number): void;
	getArray(): {
		data: unknown;
	}[];
	value_: unknown;
}
declare class VariableContainer {
	getVariableByName(name: string): Variable | undefined;
	getListByName(name: string): Variable | undefined;
}
interface SceneModal {
	id: string;
	name: string;
}
declare class Scene {
	selectedScene: SceneModal | null;
}
declare var moduleManager: EntryModuleLoader | undefined;
declare var playground: Playground | undefined;
declare var engine: Engine | undefined;
declare var variableContainer: VariableContainer | undefined;
declare var scene: Scene | undefined;
declare var block: {
	[k: string]: EntryBlock;
};
declare var options: {
	useWebGL?: boolean;
};
declare var projectId: string | undefined;
declare var userAgent: string | undefined;
type Skeleton = "basic" | "basic_without_next" | "basic_boolean_field" | "basic_button" | "basic_button_disabled" | "basic_create" | "basic_create_value" | "basic_define" | "basic_double_loop" | "basic_event" | "basic_loop" | "basic_param" | "basic_string_field" | "basic_text" | "basic_text_light" | "clickable_text" | "comment" | "pebble_basic" | "pebble_event" | "pebble_loop";
interface FieldBase {
	type: string;
}
interface FieldBlock extends FieldBase {
	type: "Block";
	accept: string;
}
interface FieldDropdownDynamic extends FieldBase {
	type: "DropdownDynamic";
	menuName: string;
}
type Field = FieldBase | FieldBlock | FieldDropdownDynamic;
interface EntryBlock {
	color: string;
	outerLine?: string;
	skeleton: Skeleton;
	statement?: unknown[];
	statements?: unknown[];
	template?: string;
	params?: Field[];
	defs?: unknown; // legacy
	def: {
		type: string;
		[k: string]: unknown;
	};
	paramsKeyMap?: Record<string, number>;
	class: string;
	isFor?: string[];
	isNotFor?: string[];
	events: Record<string, unknown>;
	type?: string;
	category?: string;
	pyHelpDef?: {
		params: string[];
		type: string;
	};
	func?(sprite: EntityObject, script: Scope<string>): unknown;
	syntax?: {
		js?: unknown[];
		py: unknown[];
	};
	event?: string;
	wikiClass?: string;
}
interface EntryBlockModule {
	name: string;
	title: Record<string, string>;
	setLanguage(): Record<string, Record<string, Record<string, string>>>;
	colorSet?: ColorSet;
	blockMenuBlocks: string[];
	getBlocks(): Record<string, EntryBlock>;
	updateEntry?(): void;
}
declare global {
	var Entry: typeof Entry$;
}
declare const Workspace: Record<string, string>;
declare const Blocks: Record<string, string>;
declare const type: string;
declare const fallbackType: string;
declare global {
	var Lang: typeof Lang$;
}
declare global {
	var EntryStatic: typeof EntryStatic$;
}
declare global {
	var user: {
		_id: string;
		username: string;
	} | null;
}
declare global {
	var updateCategory: typeof updateCategory$;
}
declare function updateCategory$<const Blocks extends string[]>(category: string, blocks: Blocks, callback: (addBlock: AddBlock<Blocks[number]>) => void, options: {
	name?: string;
	background?: string;
	backgroundOn?: string;
	backgroundSize?: string;
	colorOn?: string;
	colorOnText?: string;
}): void;
type LiteralUnion<BlockName extends string> = BlockName | (string & Record<never, never>);
type AddBlock<BlockName extends string> = 
/**
 * Entry.block에 새로운 블록을 등록합니다.
 * @param blockName 블록의 내부 이름입니다.
 * @param template 블록의 텍스트 템플릿입니다.
 * @param colors 블록의 색깔 정보입니다.
 * @param colors.color 블록의 색깔입니다.
 * @param colors.outerline 블록의 테두리 색깔입니다.
 * @param param 블록의 매개변수 정보입니다.
 * @param param.params 블록의 매개변수 배열입니다.
 * @param param.def 블록의 매개변수 기본값입니다.
 * @param param.map 블록의 매개변수가 각각 몇 번째 인덱스에 대응하는지 나타내는 객체입니다.
 * @param _class 블록을 구분할 그룹 이름입니다.
 * @param func 블록이 실행될 때 호출되는 함수입니다.
 * @param skeleton 블록의 모양입니다.
 */
<ParamsKey extends string>(blockName: LiteralUnion<BlockName>, template: string, colors: {
	color: string;
	outerline: string;
}, param: {
	params: (Field & Record<string, unknown>)[];
	def: object[];
	map: Record<ParamsKey, number>;
}, _class: string, func: (sprite: EntityObject, script: Scope<ParamsKey>) => unknown, skeleton: Skeleton) => void;

declare namespace EntryStatic$ {
	export { CategoryData$1 as CategoryData, ColorSet, colorSet, getAllBlocks };
}
declare namespace Entry$ {
	export { EntryBlock, EntryBlockModule, Field, FieldBlock, FieldDropdownDynamic, STATIC, Scope, Skeleton, block, engine, moduleManager, options, playground, projectId, scene, userAgent, variableContainer };
}
declare namespace Lang$ {
	export { Blocks, Workspace, fallbackType, type };
}

export {};
