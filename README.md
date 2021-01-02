# README

Code templates for default component structure

* src/components/COMPONENT_NAME/index.ts
* src/components/COMPONENT_NAME/COMPONENT_NAME.styles.ts
* src/components/COMPONENT_NAME/COMPONENT_NAME.types.ts
* src/components/COMPONENT_NAME/COMPONENT_NAME.tsx

* index.ts
``` ts
import ${COMPONENT_NAME} from "./${COMPONENT_NAME}";
import type { ${COMPONENT_NAME}Props } from "./${COMPONENT_NAME}.types";

export default ${COMPONENT_NAME};
export type { ${COMPONENT_NAME}Props };
```

* COMPONENT_NAME.styles.ts

``` ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
```

* COMPONENT_NAME.types.ts

``` ts
export interface ${NAME}Props {
  title: string;
}
```

* COMPONENT_NAME.tsx (memo)

``` tsx
import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import styles from "./${NAME}.styles";
import type { ${NAME}Props } from "./${NAME}.types";

const ${NAME}: FC<${NAME}Props> = memo(() => {
  return (
    <View style={styles.container}>
      <Text>${NAME}</Text>
    </View>
  );
});

export default ${NAME};
```

* COMPONENT_NAME.tsx (observer)

``` tsx
import React, { FC } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import styles from "./${NAME}.styles";
import type { ${NAME}Props } from "./${NAME}.types";

const ${NAME}: FC<${NAME}Props> = observer(() => {
  const {} = useStore("rootStore");

  return (
    <View style={styles.container}>
      <Text>${NAME}</Text>
    </View>
  );
});

export default ${NAME};

```
