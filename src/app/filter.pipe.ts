import { Pipe } from "@angular/core";

@Pipe(
  {
    name : "filter",
    pure : false
  }
)

export class filter implements Transformer
{
  transform(value: any,property: string,name: string)
  {
    var arrayOfServers = [];
    if(name=="")
    {
      return value;
    }
    for(let i of value)
    {
  if ( i[property].indexOf(name) > -1 ) {
    arrayOfServers.push(i);
  }
    }
    return arrayOfServers;
  }
}