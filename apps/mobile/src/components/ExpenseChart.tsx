import { useState } from 'react';
import { YStack, XStack, Button, Text } from 'tamagui';
import { BarChart } from 'react-native-gifted-charts';
import { Expense, Period } from '../types';
import { DUMMYEXPENSES } from '../constants/mock';
import { Dimensions } from 'react-native';

const ExpenseGraph = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('Daily');
    const [data, setData] = useState<Expense[]>(DUMMYEXPENSES);

    const chartData = data
        .sort((a, b) => new Date(a.date).getDay() - new Date(b.date).getDay())
        .map(expense => {
            const date = new Date(expense.date);
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            // const month = date.toLocaleDateString('en-US', { month: 'short' });
            // const day = date.toLocaleDateString('en-US', { day: 'numeric' });
            // const year = date.toLocaleDateString('en-US', { year: 'numeric' });
            return {
                value: Number(expense.amount),
                label: weekday,
                frontColor: '#5350B2',
                gradientColor: '#FFFFFF',
            }
        });

    const PeriodSelector = () => {
        return (
            <XStack space="$sm" pb="$lg">
                <Button backgroundColor={selectedPeriod === 'Daily' ? '#5350B2' : '#F5F5FD'}>
                <Text color={selectedPeriod === 'Daily' ? 'white' : '#3F3F40'}>Daily</Text>
                </Button>
                <Button backgroundColor={selectedPeriod === 'Weekly' ? '#5350B2' : '#F5F5FD'}>
                <Text color={selectedPeriod === 'Weekly' ? 'white' : '#3F3F40'}>Weekly</Text>
                </Button>
                <Button backgroundColor={selectedPeriod === 'Monthly' ? '#5350B2' : '#F5F5FD'}>
                <Text color={selectedPeriod === 'Monthly' ? 'white' : '#3F3F40'}>Monthly</Text>
                </Button>
                <Button backgroundColor={selectedPeriod === 'Yearly' ? '#5350B2' : '#F5F5FD'}>
                <Text color={selectedPeriod === 'Yearly' ? 'white' : '#3F3F40'}>Yearly</Text>
                </Button>
        </XStack>
        )
    }

    const Graph = () => {
        const maxAmount = Math.max(...chartData.map(item => item.value));
        return (
            <BarChart
                data={chartData}
                width={Dimensions.get('window').width - 40}
                height={220}
                barWidth={15}
                spacing={30}
                barBorderRadius={8}
                frontColor="lightgray"
                yAxisThickness={0}
                xAxisThickness={0}
                hideRules
                maxValue={maxAmount}
                noOfSections={5}
                yAxisTextStyle={{
                    color: '#3F3F40',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                }}
                xAxisLabelTextStyle={{
                    color: '#3F3F40',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                }}
                yAxisLabelPrefix="Ksh"
                isAnimated
                roundedTop
                barStyle={{
                    gradient: {
                        colors: ['#5350B2', '#FFFFFF'],
                        colorsInverted: ['#FFFFFF', '#5350B2'],
                    },
                }}
            />
        );
    }

    return (
        <YStack p="$md">
        <PeriodSelector />
        <Graph />
        </YStack>
    );
}

export default ExpenseGraph;