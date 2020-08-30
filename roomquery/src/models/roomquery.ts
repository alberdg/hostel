import mongoose from 'mongoose';

interface RoomQueryAttrs {
  roomId: string,
  dateIn: string,
  dateOut: string,
};

interface RoomQueryDoc extends mongoose.Document {
  roomId: string,
  dateIn: string,
  dateOut: string,
};

interface RoomQueryModel extends mongoose.Model<RoomQueryDoc> {
  build(attrs: RoomQueryAttrs): RoomQueryDoc
}

const roomQuerySchema = new mongoose.Schema({
  roomId: String,
  dateIn: String,
  dateOut: String,
});

roomQuerySchema.statics.build = (attrs: RoomQueryAttrs) => {
  return new RoomQuery(attrs);
}

const RoomQuery = mongoose.model<RoomQueryDoc, RoomQueryModel>('RoomQuery', roomQuerySchema);
export { RoomQuery };
