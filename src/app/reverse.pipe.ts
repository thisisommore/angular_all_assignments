import { Pipe } from "@angular/core";

@Pipe(
  {
    name: 'reverse'
  }
)

export class reverse implements Transformer
{

transform(value: any)
{
  return value.split("").reverse().join("");
}

}