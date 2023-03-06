import { Event } from './Event';
const baseUrl = 'http://localhost:3001';
const url = `${baseUrl}/events`;
//const url = `${baseUrl}/fail`;

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the event(s).';
    default:
      return 'There was an error retrieving the event(s). Please try again.';
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  console.log(response.json);
  return response.json();
}

// eslint-disable-next-line
function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

function convertToEventModels(data: any[]): Event[] {
  console.log(data);
  let events: Event[] = data.map(convertToEventModel);
  return events;
}

function convertToEventModel(item: any): Event {
  return new Event(item);
}

const eventAPI = {

  find(id: number) {
      return fetch(`${url}/${id}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToEventModel);
  },
    

  get(page = 1, limit = 20) {
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
      .then(delay(600))
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToEventModels)
      .catch((error: TypeError) => {
        console.log('log client error ' + error);
        throw new Error(
          'There was an error retrieving the event. Please try again.'
        );
      });
  },

  put(event: Event){
    return fetch(`${url}/${event.id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error: TypeError) => {
        console.log('log client error ' + error);
        throw new Error(
          'There was an error updating the event. Please try again.'
        );
      });
  }
};

export { eventAPI };