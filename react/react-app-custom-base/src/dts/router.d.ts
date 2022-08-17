import { RouteObject } from "react-router-dom";

interface IDomMeta {
    title?: string;
}

declare module "react-router-dom" {
    export interface RouteObject {
        meta?: IDomMeta;
        children?: RouteObject[];
    }
}
