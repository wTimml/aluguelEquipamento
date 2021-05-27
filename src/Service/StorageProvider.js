import localforage from 'localforage'

localforage.config({
  driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB],
  name: 'AjudaEP',
  storeName: 'AjudaEP_keys'
})

export default localforage