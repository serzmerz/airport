import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Title from './components/Title'
import styled from 'styled-components'
import Tabs from './components/Tabs'
import Table from './components/Table'
import axios, { AxiosResponse } from 'axios'
import format from 'date-fns/format'

interface IFly {
  ID: number;
  term: string;
  actual: string;
  timeToStand: string;
  timeLandFact: string;
  'airportFromID.city_ru': string;
  'airportToID.city_ru': string;
  codeShareData: Array<{
    codeShare: string;
    airline: {
      ru: {
        name: string;
      }
    }
  }>;
}

interface IResponse {
  [index: string]: Array<IFly>;
  arrival: Array<IFly>;
  departure: Array<IFly>;
}

const App = () => {
  const tabs = useMemo(() => [{ key: 'departure', label: 'Вылет' }, { key: 'arrival', label: 'Прилет' }], []);

  const [flights, setFlights] = useState<IResponse>({ arrival: [], departure: [] });
  const fetchFlights = useCallback(async () => {
    try {
      const response: AxiosResponse<{ body: IResponse }> = await axios.get('https://api.iev.aero/api/flights/11-04-2019');
      console.log('response', response.data);
      setFlights(response.data.body);
    } catch (error) {
      // show a toast or smth like that
      return;
    }
  }, []);
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <Page>
      <Container>
        <Title>Поиск рейса</Title>
        <div>
          <input placeholder='Город или номер рейса' />
          <button>найти</button>
        </div>
        <Tabs tabs={tabs}>
          {({ activeTab }) => (
            <Table>
              <Table.Header columns={['Терминал', 'Время', 'Место назначения', 'Статус', 'Авиакомпания', 'Рейс']} />
              <Table.Body>
                {flights[activeTab].map(item => (
                  <Table.Row key={item.ID}>
                    <Table.Cell>
                      {item.term}
                    </Table.Cell>
                    <Table.Cell>
                      {format(new Date(item.timeToStand), 'HH:mm')}
                    </Table.Cell>
                    <Table.Cell>
                      {item[activeTab === 'arrival' ? 'airportFromID.city_ru' : 'airportToID.city_ru']}
                    </Table.Cell>
                    <Table.Cell>
                      Вылетел в {format(new Date(activeTab === 'arrival' ? item.actual: item.timeLandFact), 'HH:mm')}
                    </Table.Cell>
                    <Table.Cell>
                      {item.codeShareData.map(fly => (
                        fly.airline.ru.name
                      ))}
                    </Table.Cell>
                    <Table.Cell>
                      {item.codeShareData.map(fly => (
                        fly.codeShare
                      ))}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </Tabs>
      </Container>
    </Page>
  )
}

export default App

const Page = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  box-sizing: border-box;
`

const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`
