import _ from 'lodash';


const data = [
  {
    username:'dany',
    role:'admin'
  },
  {
    username:'valentira',
    role:'seller'
  },
  {
    username:'paty',
    role:'costumer'
  },
  {
    username:'samara',
    role:'seller'
  },
]

const rta = _.groupBy(data, (item)=> item.role);
console.log(rta);