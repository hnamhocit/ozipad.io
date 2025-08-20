import { Theme } from "@/interfaces/theme";

export interface IUser {
	id: string;
	username: string;
	email: string | null;
	theme: Theme
}
