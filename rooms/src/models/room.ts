import mongoose from 'mongoose';

interface RoomAttrs {
  title: string,
  subtitle: string,
  picture: string,
  beds: number,
  ensuiteBathroom: boolean,
  price: number,
  description: string
};

interface RoomDoc extends mongoose.Document {
  title: string,
  subtitle: string,
  picture: string,
  beds: number,
  ensuiteBathroom: boolean,
  price: number,
  description: string
};

interface RoomModel extends mongoose.Model<RoomDoc> {
  build(attrs: RoomAttrs): RoomDoc
}

const roomSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  picture: String,
  beds: Number,
  ensuiteBathroom: Boolean,
  price: Number,
  description: String
});

roomSchema.statics.build = (attrs: RoomAttrs) => {
  return new Room(attrs);
}

const Room = mongoose.model<RoomDoc, RoomModel>('Room', roomSchema);
export { Room };
