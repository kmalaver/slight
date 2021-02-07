export type componentConfig = {
  selector: string
  data: object
  template: (data:object) => string
  functions: object
}