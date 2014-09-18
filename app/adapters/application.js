import DS from 'ember-data';

export default DS.SailsSocketAdapter.extend({
	host: 'http://localhost:1337'
});