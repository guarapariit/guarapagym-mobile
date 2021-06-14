import React from 'react';
import { Text, View } from 'react-native'
import { Colors } from '../../utils/ColorsEnum';

import { Container, Header, MonthContainer, MonthName, ExercisesContainer, Day, ExerciseName, TextItem } from './styles';

const Home: React.FC = () => {
  const mock = [
    {
      monthName: 'Maio',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito'
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda'
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma'
        },
        {
          day: 'Qui. 653',
          exerciseName: 'Rosto'
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito'
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda'
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma'
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito'
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda'
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma'
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito'
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda'
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma'
        }
      ]
    }
  ]

  return (
    <Container>
      <Header>

      </Header>
      <View
        style={{
          padding: 20
        }}
      >
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 22,
            lineHeight: 26,
          }}
        >
          Próximos
        </Text>
        {
          mock.map(month => (
            <MonthContainer>
              <MonthName>{month.monthName}</MonthName>
                {
                  month.exercises.map(exercise => (
                    <ExercisesContainer>
                      <TextItem>
                        <Day>{exercise.day}</Day>
                      </TextItem>
                      <TextItem>
                        <Text
                          style={{
                            color: Colors.BROWN,
                            textTransform: 'uppercase',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 21,
                          }}
                        >
                          Treino
                        </Text>
                      </TextItem>
                      <TextItem>
                        <ExerciseName>{exercise.exerciseName}</ExerciseName>
                      </TextItem>
                    </ExercisesContainer>
                  ))
                }
            </MonthContainer>
          ))
        }
      </View>
    </Container>
  );
}

export default Home;
