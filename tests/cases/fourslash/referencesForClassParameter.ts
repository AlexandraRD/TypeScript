/// <reference path='fourslash.ts'/>

// Reference to a class parameter.

////var p = 2;
////
////class p { }
////
////class foo {
////    constructor ([|public [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}p|]: any|]) {
////    }
////
////    public f(p) {
////        this.[|{| "isWriteAccess": true |}p|] = p;
////    }
////
////}
////
////var n = new foo(undefined);
////n.[|{| "isWriteAccess": true |}p|] = null;

verify.singleReferenceGroup("(property) foo.p: any", "p");
