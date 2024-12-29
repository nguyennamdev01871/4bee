  import "./Content.css";

function Content() {
  return (
    <div className="content">
      <div className="menu">
        <div className="date">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              class="btn-check"
              id="btncheck1"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary">
              28 Nov 2024 - 28 Dec 2024
            </label>
          </div>

          <button className="btn btn-success">Export</button>
        </div>

        <div class="input">
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="total">
        <div className="totalBalance">
          <p>Số dư</p>
          <h3>$ 442.142,22</h3>
        </div>

        <div className="button">
          <button className="add">Add</button>
          <button className="btn">Send</button>
          <button className="btn">Request</button>
          <button className="btn-dot">...</button>
        </div>
      </div>

      <div className="cashFlow">
        <div className="chart">
          <h4>Thống kê</h4>
          <img src="anh1" />
        </div>

        <div className="income">
          <div className="come">
            <button className="in">⬋</button>
            <h6>Thu nhập</h6>
            <h3>$ 15.349,20</h3>
          </div>

          <div className="expense">
            <button className="out">⬈</button>
            <h6>Chi phí</h6>
            <h3>$ 5.349,20</h3>
          </div>
        </div>
      </div>

      <div className="Product">
        <div className="activity">
          <h4>Thống kê sản phẩm</h4>
          <div className="button">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-primary">
                Lọc sản phẩm
              </button>
              <button type="button" class="btn btn-outline-primary">
                Sắp xếp
              </button>
              <button type="button" class="btn btn-outline-primary">
                ...
              </button>
            </div>
          </div>
        </div>

        <div className="table">
          <table class="table">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Phương thức thanh toán</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Áo sơ mi kẻ sọc</td>
                <td>550.000</td>
                <td>Hoàn thành</td>
                <td>Tiền mặt</td>
                <td><button className="btn btn-primary">Add</button></td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <td>Áo sơ mi trắng</td>
                <td>200.000</td>
                <td>Hoàn thành</td>
                <td>Chuyển khoản</td>
                <td><button className="btn btn-primary">Add</button></td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <td>Áo sơ mi hồng cách điệu</td>
                <td>600.000</td>
                <td>Hoàn thành</td>
                <td>Chuyển khoản</td>
                <td><button className="btn btn-primary">Add</button></td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Content;
