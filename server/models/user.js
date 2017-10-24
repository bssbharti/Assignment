import mongoose, { Schema } from 'mongoose';

var userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNo: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	}
});

export default mongoose.model('user', userSchema);