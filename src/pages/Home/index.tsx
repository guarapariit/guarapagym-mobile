import React, { useRef } from 'react';
import { Text, View, Linking, DrawerLayoutAndroid, TouchableOpacity, Image } from 'react-native'
import { hamburguerIcon, logoBlack } from '../../assets';
import { SideBar } from '../../components/sidebar';
import { Colors } from '../../utils/ColorsEnum';
import { mock } from './mock';

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
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={SideBar}
      style={{marginTop: 0}}
    >
      <Container>
        <Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            onPress={() => (drawer as any).current.openDrawer()}
          >
            <Image
              source={{ uri: hamburguerIcon }}
              style={{width:50, height:50, marginTop:30}}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: logoBlack }}
            style={{width:120, height:50, marginTop:30}}
          />
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
    </DrawerLayoutAndroid>
  );
}

export default Home;
