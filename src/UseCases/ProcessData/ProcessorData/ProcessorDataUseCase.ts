
export class ProcessorData{
  public static Process(data:(string | undefined)):(( Array<Array<any>>) | undefined){
    if(data) return data.split('\r\n')
      .map(line =>  {
        return line.split(',')
      })
    throw new Error('error processing data, probaly data is undefined.')
  }
}