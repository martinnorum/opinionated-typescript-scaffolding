// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6a36f6d5b61602b6c4ad932599097135e80abaf4/react/react-addons-shallow-compare.d.ts
declare namespace __React {
    namespace __Addons {
        export function shallowCompare<P, S>(
            component: __React.Component<P, S>,
            nextProps: P,
            nextState: S): boolean;
    }
}

declare module "react-addons-shallow-compare" {
    var shallowCompare: typeof __React.__Addons.shallowCompare;
    export = shallowCompare;
}
