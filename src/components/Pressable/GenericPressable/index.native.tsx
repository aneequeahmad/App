import React, {forwardRef} from 'react';
import GenericPressable from './BaseGenericPressable';
import PressableProps, {PressableRef} from './types';

function NativeGenericPressable(props: PressableProps, ref: PressableRef) {
    return (
        <GenericPressable
            focusable
            accessible
            accessibilityHint={props.accessibilityHint ?? props.accessibilityLabel}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            ref={ref}
        />
    );
}

NativeGenericPressable.displayName = 'NativeGenericPressable';

export default forwardRef(NativeGenericPressable);
