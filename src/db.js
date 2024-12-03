import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		await mongoose.connect();
	} catch (e) {
		console.log(e);
	}
};
