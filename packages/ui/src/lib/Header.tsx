import { View, StyleSheet } from 'react-native';
import { COLORS } from '@/apps/mobile/src/constants/colors';
import type { FunctionComponent } from 'react';

type Props = {
    children: React.ReactNode;
}

export const Header: FunctionComponent<Props> = ({children}) => {
    return <View style={styles.container}>{children}</View> 
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})