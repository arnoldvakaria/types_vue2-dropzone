// Type definitions for vue2-dropzone
// Project: https://github.com/rowanwins/vue-dropzone
import { VueConstructor } from 'vue';

export default Vue2Dropzone;
export const Vue2Dropzone: Vue2DropzoneConstructor;

export interface Vue2DropzoneProps {
	id: string;
	options: Object;
	includeStyling: boolean;
	awss3: Object;
	destroyDropzone: boolean;
	duplicateCheck: boolean;
	useCustomSlot: boolean;
}

export interface Vue2DropzoneData {
	isS3: false;
	isS3OverridesServerPropagation: false;
	wasQueueAutoProcess: true;
}

export interface Vue2DropzoneWatch { }

export interface Vue2DropzoneComputed {
	dropzoneSettings: () => Object;
	mounted: () => void;
	beforeDestroy: () => void;
}

export interface Vue2DropzoneMethods {
	manuallyAddFile: (file: any, fileUrl: any) => void;
	setOption: (option: any, value: any) => void;
	removeAllFiles: (bool: boolean) => void;
	processQueue: () => void;
	init: () => void;
	destroy: () => void;
	updateTotalUploadProgress: () => void;
	getFallbackForm: () => void;
	getExistingFallback: () => void;
	setupEventListeners: () => void;
	removeEventListeners: () => void;
	disable: () => void;
	enable: () => void;
	filesize: (size: any) => void;
	accept: (file: any, done: any) => void;
	addFile: (file: any) => void;
	removeFile: (file: any) => void;
	getAcceptedFiles: () => void;
	getRejectedFiles: () => void;
	getFilesWithStatus: () => void;
	getQueuedFiles: () => void;
	getUploadingFiles: () => void;
	getAddedFiles: () => void;
	getActiveFiles: () => void;
	getSignedAndUploadToS3: (file: any) => void;
	setAWSSigningURL: (location: any) => void;
}

export interface Vue2DropzoneConstructor extends VueConstructor {
	props: Vue2DropzoneProps;
	data: () => Vue2DropzoneData;
	watch: Vue2DropzoneWatch;
	computed: Vue2DropzoneComputed;
	mounted: () => void;
	beforeDestroy: () => void;
	methods: Vue2DropzoneMethods;
}