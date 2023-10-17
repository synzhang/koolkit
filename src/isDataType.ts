type DataType = 'Number' | 'String' | 'Boolean' | 'Object' | 'Array' | 'Function'

const isDataType = (type: DataType, data: any): boolean => {
  const result = Object.prototype.toString.call(data)

  return type === result.replace(/\[object ([a-z]+)\]/ig, '$1')
}

export default isDataType
