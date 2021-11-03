class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      let newRecord = await this.model.create(obj);
      return newRecord;
    } catch (e) {
      console.error(e);
    }
  }

  async getItem(id) {
    let getItem;
    try {
      if (id) {
        return (getItem = await this.model.findOne({ where: { id: id } }));
      } else {
        return (getItem = await this.model.findAll());
      }
    } catch {
      console.error("cant get item");
    }
  }

  // async updateItem(id, obj) {
  //   try {
  //     let recordId = await this.model.findOne({ where: { id: id } });
  //     let updateRecord = await recordId.update(obj);
  //     return updateRecord;
  //   } catch (e) {
  //     console.error(
  //       "error in updating record for model",
  //       this.model.name,
  //       `id:${id}`
  //     );
  //   }
  // }

  async delete(id) {
    try {
      let deletedRecord = await this.model.destroy({ where: { id: id } });
      return deletedRecord;
    } catch (e) {
      console.error(
        "error in deleting record for model",
        this.model.name,
        `id:${id}`
      );
    }
  }
}
module.exports = Collection;
