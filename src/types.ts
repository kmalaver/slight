export type componentConfig = {
  selector: string
  data: object
  template: (props:object) => string
}

export type ComponentType = {
  render: () => void 
}