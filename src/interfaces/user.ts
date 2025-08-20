import {Theme} from "@/interfaces/theme";

export interface IUser {
	id: string;
	displayName: string;
	email: string;
	theme: Theme
}