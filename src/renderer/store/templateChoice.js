const TEMPLATE_CHOSEN =  'TEMPLATE_CHOSEN'

export const chooseTemplate = (template) => {
  return{
    action: TEMPLATE_CHOSEN,
    template
  }
}

export default function (state = '', action) {
  switch(action.type){
    case TEMPLATE_CHOSEN:
      return action.template;
    default:
      return state
  }
}