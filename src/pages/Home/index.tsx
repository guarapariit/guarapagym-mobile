import React from 'react';
import { Text, View, Linking } from 'react-native'
import { Colors } from '../../utils/ColorsEnum';

import {
  Container,
  Header,
  MonthContainer,
  MonthName,
  ExercisesContainer,
  Day,
  ExerciseName,
  TextItem,
  ExerciseHeader,
  ExerciseBody,
  ExerciseSetTraining,
  ExerciseVideo
} from './styles';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState({month: -1, exercise: -1})

  const mock = [
    {
      monthName: 'Maio',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            },
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://reactnative.dev/docs/linking',
            }
          ]
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 1,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Qui. 653',
          exerciseName: 'Rosto',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            },
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ],
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        }
      ]
    },
    {
      monthName: 'Março',
      exercises: [
        {
          day: 'Seg. 9',
          exerciseName: 'Peito',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Terça. 45',
          exerciseName: 'Bunda',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
        },
        {
          day: 'Qua. 4',
          exerciseName: 'Alma',
          time: '00:45',
          sets: [
            {
              amountSets: 3,
              amountTraining: 10,
              trainingName: 'Levantamentos',
              exampleLink: 'https://www.youtube.com/watch?v=Ddm7ZPTI8c0',
            }
          ]
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
          mock.map((month, monthIndex) => (
            <MonthContainer
              key={'month-' + monthIndex}
            >
              <MonthName>{month.monthName}</MonthName>
              {
                month.exercises.map((exercise, exerciseIndex) => (
                  <ExercisesContainer
                    key={'exercise-' + exerciseIndex}
                  >
                    <ExerciseHeader
                      onPress={() => {
                        setCurrentIndex({month: monthIndex, exercise: exerciseIndex})
                      }}
                    >
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
                    </ExerciseHeader>
                      { monthIndex === currentIndex.month &&
                        exerciseIndex === currentIndex.exercise && (
                        <View>
                          {
                            exercise.sets.map((set, k) => (
                              <ExerciseBody
                                key={'body-' + k}
                              >
                                <TextItem>
                                  <Text>{set.amountSets} set(s) de</Text>
                                </TextItem>
                                <Text style={{ marginRight: 5, width: 20 }}>{set.amountTraining}</Text>
                                <ExerciseSetTraining>{set.trainingName}</ExerciseSetTraining>
                                <ExerciseVideo 
                                  style={{ alignSelf: 'flex-end' }}
                                  onPress={() => Linking.openURL(set.exampleLink)}
                                >
                                  <Text>?</Text>
                                </ExerciseVideo>
                              </ExerciseBody>
                            ))
                          }
                        </View>
                      )}
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
