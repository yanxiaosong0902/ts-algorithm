
interface DictoryInterface<T> {
  table: {[key: string] : T }
  set(key: string, val: T): boolean
  delete(key: string): boolean
  has(key: string): boolean
  get(key: string): T
  clear(): void
  size(): number
  keys(): string[]
  values(): Array<T>
}

class Dictory<T> implements DictoryInterface<T>{
  table: {[key:string] : T} = {}
  constructor() {}
  set(key: string, val: T) {
    this.table[key] = val
    return true
  }
  delete(key: string) {
    if (this.has(key)) {
      delete this.table[key]
      return true
    } else {
      return false
    }
  }
  has(key: string) {
    if (this.table.hasOwnProperty(key)) {
      return true
    } else {
      return false
    }
  }
  get(key: string) {
    if (this.has(key)) {
      return this.table[key]
    }
  }
  clear() {
    this.table = {}
  }
  size() {
    return this.keys().length
  }
  keys() {
    return Object.keys(this.table)
  }
  values() {
    let arr = []
    arr = this.keys().map((e:string) => this.table[e])
    return arr
  }
}
export default Dictory
