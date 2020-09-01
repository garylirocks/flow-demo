// @flow

// Takes an object type, returns the type of its `prop` key
type ExtractPropType = <T>({prop: T}) => T;

type O = {
    name: {
        first: string,
    }
};


function foo(o: O) {
    return {
        firstName: o.name.first,
    };
}


function bar(o): string {
    return 'cc';
    // return {
    //     firstName: o.name.first,
    // };
}
// type Obj = {prop: number};
// type PropType = $Call<ExtractPropType, Obj>;

// type PropType = $Call<typeof foo, O>;
// type PropType = $Call<<T>(() => T)=> T, typeof foo>;
type PropType = $Call<<T>(() => T)=> T, typeof bar>;


const myObj: PropType = {
    firstName: 5,
};
