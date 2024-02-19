import { v4 } from "uuid";
import { useDispatch } from "react-redux";

const AddForm = () => {
  // console.log(v4()); benzersiz id

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //1) sayfanın yenilenmesini engelle
    e.preventDefault();

    //2) store kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(), //!aşagıda açıklama
      text: e.target[0].value,
      is_done: false, //tamamlandımı? demek
      created_at: new Date().toLocaleDateString(), //günün tarihi için
    };
    console.log(newTodo);

    //3) veriyi storeye kaydet (reducera actionu ilet)
    dispatch({
      type: "ADD_TODO", //işlem to do ekle
      payload: newTodo, //neyi eklemek istiyorsak onu yaz yeni to do ekle
    });

    //4) formu temizzle
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn:typescript projesi yap"
        type="text"
      />
      <button className="rounded btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;

//! benzersiz id oluşturuldur terminalde npm i uuid yazıldı
