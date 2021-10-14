import React, { FC, useMemo } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react-lite";
import { CheckBoxCheckedIcon, CheckBoxUncheckedIcon } from "components/svg";
import { colors } from "themes";
import { pluralize } from "utils";
import styles from "./WordSet.styles";
import type { WordSetProps } from "./WordSet.types";

const WordSet: FC<WordSetProps> = observer(({ set, containerStyle }) => {
  const wrapperStyle = useMemo(() => [styles.container, containerStyle], [containerStyle]);

  return (
    <TouchableOpacity onPress={set.toggleCheck} style={wrapperStyle}>
      <ImageBackground
        resizeMode="cover"
        source={set.image}
        imageStyle={styles.backgroundImage}
        style={styles.imageContainer}
      >
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{set.name}</Text>
          <View style={styles.subInfo}>
            <Text style={styles.wordsCount}>
              {pluralize(set.words.length, ["слово", "слова", "слов"])}
            </Text>
            <Text style={styles.exampleWords}>{set.exampleWords.join(", ")}</Text>
          </View>
        </View>
        <View style={styles.checkWrapper}>
          {set.checked ? (
            <CheckBoxCheckedIcon width={35} height={35} fill={colors.buttons.accept} />
          ) : (
            <CheckBoxUncheckedIcon width={35} height={35} fill={colors.black} />
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});

WordSet.displayName = "WordSet";

export default WordSet;
