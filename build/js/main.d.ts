declare let stringArr: (string | number)[];
type KDramas = {
    genre: string | boolean;
    name?: string;
    year?: number;
    good: boolean;
    actors: string[];
};
declare let Romance: KDramas;
declare let Psych: KDramas;
declare const greetActor: (kdrama: KDramas) => string;
//# sourceMappingURL=main.d.ts.map