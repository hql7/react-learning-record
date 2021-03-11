import React, { Suspense, lazy } from 'react';
import NormalButton from "@/components/button"

// 动态import
import { add } from "@/utils/math"
console.log(add, 1);

function importWhenUse() {
  import("@/utils/math").then(math => {
    console.log(math.add, 2);
  });
}
importWhenUse()

// 动态引入组件
const LazyButton = lazy(() => import('@/components/button'))

function CodeSplit() {
  return (
    <div>
      CodeSplit
      <NormalButton />
      <Suspense fallback={<div>Loading</div>}>
        <LazyButton title="Lazy Button" />
      </Suspense>
    </div>
  );
}

export default CodeSplit;
