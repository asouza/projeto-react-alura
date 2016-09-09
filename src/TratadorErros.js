import PubSub from 'pubsub-js';

export default class TratadorErros {
	publicaErros(erros){
		for(var i=0;i<erros.errors.length;i++){
			var erro = erros.errors[i];
			PubSub.publish("erro-validacao",erro);
		}
	}
}