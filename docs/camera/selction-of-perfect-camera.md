
# Tổng quan về camera {#tong-quan}

:::tip Bạn đang đọc tài liệu về camera trong công nghiệp

- Tài liệu được cập nhật lần cuối **19/04/2024**. Nếu có bất cứ điều gì muốn góp ý về tài liệu liên hệ [Trần Minh Thức](https://fb.com/mthuc9x).
- Tác giả không chịu trách nhiệm trước những nội dung được viết trong tài liệu nếu nó gây hại đến bạn, cân nhắc trước khi áp dụng nó, không có gì là đúng hoàn toàn.
:::


## Camera là gì? {#camera-la-gi}

Máy ảnh hay camera là một thiết dùng để thu ảnh thành một ảnh tĩnh hay thành một loạt các ảnh chuyển động. Tên camera có gốc từ tiếng La tinh camera obscura nghĩa là "phòng tối", từ lý do máy ảnh đầu tiên là một cái phòng tối với vài người làm việc trong đó. Chức năng của máy ảnh giống với mắt người. Về cơ bản thì camera trong công nghiệp không khác gì so với camera thường dùng, nhưng sẽ có một số đặc tính đặc biệt để phù hợp với môi trường công nghiệp.

## Các loại Camera chủ yếu? {#phan-loai}

- **[Area scan Camera (Camera chụp vùng)](/camera/)**: bằng cảm biến hình ma trận, hình ảnh hai chiều được chụp cùng lúc, sau đó được gửi đến máy tính (PC) và xử lí ở PC, camera này đóng vai trò như một thiết bị thu thập hình ảnh cho PC.

- **[Line scan Camera (Camera chụp dòng)](/camera/)**: chỉ có một  (hoặc 2) hàng cảm biến xếp thẳng hàng duy nhất chụp các dòng riêng lẻ sau đó gửi đến máy tính (cần có frame grabber hỗ trợ) để ghép thành một tấm ảnh hoàn chỉnh. Bằng cách cho sản phẩm cần chụp chạy trên băng tải hoặc xoay tròn. Thích hợp để chụp các sản phẩm hình trụ tròn, tấm lớn, chạy liên tục , v.v.

- **Smart Camera (Camera thông minh)** chủ yếu là camera chụp vùng, khá hiểm rất hiếm khi có camera chụp dòng (vì vấn đề hiệu suất). Là loại camera tích hợp bộ xử lí (máy tính nhúng) và đóng gói thành một thiết bị duy nhất, camera này có thể tự thu thập hình ảnh - xử lý và trả về kết quả nhờ vào máy tính tích hợp. Kết quả và dữ liệu đo được truyền trực tiếp đến PLC, điều khiển robot, v.v. thông qua các giao diện và giao thức khác nhau. Loại này tôi sẽ không giới thiệu trong phần này vì nó sẽ khác nhau ở mỗi hãng.

## Các thông số cơ bản của camera
Việc lựa chọn camera nào để xử dụng thường ảnh hưởng bởi nhiều yếu tố liên quan đến dự án cần kiểm tra. Đầu tiên cần phải phù hợp với yêu cầu của dự án như : loại mẫu, các yêu cầu kiểm tra,.. sau đó mới đến sự tối ưu về chi phí triển khai. Ảnh chụp tốt sẽ giúp cho quá trình xử lí nhẹ nhàng hơn.

- Lựa chọn giữa **Area scan Camera** hay **Line scan Camera**: đầu tiên cần xác định sản phẩm cần kiểm là các sản phẩm riêng lẻ (từng khối), là sản phẩm chạy dài liên tục hay là sản phẩm hình trụ cần kiểm bề mặt. Thông thường thì các sản phẩm chạy từng cái (hộp sữa, lon nước,..) thì nên dùng **Area scan Camera**, còn **Line scan Camera** sẽ hợp lí cho các sản phẩm cần chụp liền mạch (cuộn giấy, các loại hạt dính sát nhau,...). Các bộ phận dài, vật liệu cuộn liên tục hoặc các vật thể hình trụ có thể xoay được đều phù hợp cho việc thu nhận hình ảnh bằng **Line scan Camera**.
- Độ phân giải (Resolution) và kích thước cảm biến (Sensor size): là những yếu tố quan trọng cần xem xét để có thể áp dụng được các thuật toán kiểm tra phù hợp cho các chi tiết sản phẩm và yêu cầu kiểm tra khác nhau. Yêu cầu kỹ thuật chính là:

  1. Độ phân giải (Resolution) camera cần phải đủ cao để có thể phát hiện được các chi tiết nhỏ nhất trên bề mặt của sản phẩm. Độ phân giải (Resolution) càng cao, khả năng phát hiện các chi tiết càng tốt.

  2. Kích thước cảm biến (Sensor size) camera cần phải phù hợp, tương ứng với kích thước của các thành phần cần kiểm tra. Nếu thành phần lớn, cảm biến (Sensor) cũng cần có kích thước tương ứng để có thể bao phủ toàn bộ bề mặt sản phẩm.

  3. Loại ống kính quang học (Optics) sử dụng cũng cần được lựa chọn thích hợp, để đảm bảo có thể thu được hình ảnh rõ nét và chi tiết từ khoảng cách phù hợp với kích thước của sản phẩm.
- Tốc độ (Speed): Camera phải chụp bao nhiêu ảnh mỗi giây (images per second) hoặc quét bao nhiêu dòng mỗi giây (lines per second)?

  Đặc biệt, camera tốc độ cao yêu cầu tốc độ truyền dữ liệu cao. Các cảm biến (sensors) dưới dạng CMOS, có khả năng đọc trực tiếp từng điểm ảnh và cung cấp tốc độ quét khung hình (frame rate) cao hơn so với cảm biến CCD.

  Các yêu cầu kỹ thuật liên quan đến tốc độ (Speed) bao gồm:

    1. Tốc độ chụp ảnh (Image capture rate): Camera cần có khả năng chụp đủ số lượng ảnh mỗi giây (images per second) để đáp ứng yêu cầu của ứng dụng. Đối với ứng dụng yêu cầu tốc độ cao, có thể cần đến hàng trăm ảnh mỗi giây.

    2. Tốc độ quét dòng (Line scan rate): Đối với một số ứng dụng, camera cần quét theo dòng với tốc độ cao (lines per second) để có thể phát hiện và phân tích các đối tượng di chuyển nhanh.

    3. Tốc độ truyền tải nhanh (Fast transmission): Camera tốc độ cao yêu cầu truyền tải dữ liệu ảnh nhanh, ví dụ như USB 3.0, Gigabit Ethernet hoặc Camera Link, để đảm bảo không bị giới hạn về tốc độ truyền.

    4. Cảm biến CMOS (CMOS sensors): Cảm biến CMOS có khả năng đọc trực tiếp từng điểm ảnh, do đó có thể cung cấp tốc độ quét khung hình cao hơn so với cảm biến CCD truyền thống.

  Tóm lại, tốc độ quét ảnh/dòng, truyền tải nhanh và công nghệ cảm biến CMOS là những yếu tố quan trọng để đáp ứng yêu cầu về tốc độ của camera trong các ứng dụng có yêu cầu về xử lý nhanh.

- **Chất lượng hình ảnh (Image quality)**: Hình ảnh của camera phải có chất lượng tốt như thế nào để có thể kiểm tra một cách tốt nhất?

  Các loại camera CCD thường tạo ra hình ảnh đồng nhất hơn, chúng có độ nhạy sáng cao hơn nhưng có khuynh hướng bị mờ (smearing) và sáng chói (blooming) khi bị quá phơi sáng (exposure).

  Các camera CMOS thường yêu cầu nhiều ánh sáng hơn và phải được hiệu chỉnh kỹ lưỡng, vì bản chất chúng tạo ra hình ảnh không đồng nhất. Tuy nhiên, chúng lại có khả năng chịu được điều kiện ánh sáng khắc nghiệt hơn và không bị mờ hoặc sáng chói.

  Các yêu cầu về chất lượng hình ảnh (Image quality) bao gồm:

    1. Độ đồng nhất hình ảnh (Image homogeneity): Camera CCD thường tạo ra hình ảnh đồng nhất hơn so với camera CMOS.

    2. Độ nhạy sáng (Light sensitivity): Camera CCD thường có độ nhạy sáng cao hơn camera CMOS.

    3. Khả năng chịu đựng điều kiện ánh sáng khắc nghiệt: Camera CMOS thường có khả năng chịu đựng điều kiện ánh sáng khắc nghiệt hơn, ít bị mờ và chói sáng hơn.

    4. Yêu cầu hiệu chỉnh: Camera CMOS thường yêu cầu phải được hiệu chỉnh kỹ lưỡng để đảm bảo chất lượng hình ảnh tốt.

  Tóm lại, các yêu cầu về chất lượng hình ảnh cần được cân nhắc kỹ lưỡng, bao gồm độ đồng nhất, độ nhạy sáng, khả năng chịu đựng điều kiện ánh sáng, và nhu cầu hiệu chỉnh, tùy thuộc vào công nghệ cảm biến (CCD hay CMOS) được sử dụng.

- **Cảm biến màu sắc hay đơn sắc (Monochrome or colour sensor)**: Camera đơn sắc (monochrome) rõ ràng có độ nhạy sáng cao hơn và dữ liệu ảnh được mã hóa chỉ với 8 bit. Ảnh màu (colour) với thông tin tín hiệu 24 bit cho phép thực hiện các đánh giá ảnh bổ sung để phân tách các màu sắc khác nhau của cùng một độ sáng (= sắc độ xám), nhưng khối lượng dữ liệu lại lớn hơn nhiều.

  Trong trường hợp camera màu 1 chip, thông tin chi tiết bị mất đi do sự nội suy màu Bayer, độ chính xác đo lường bị giảm.

  Các yêu cầu kỹ thuật liên quan đến việc lựa chọn cảm biến màu sắc hay đơn sắc bao gồm:

  Độ nhạy sáng (Light sensitivity): Camera đơn sắc (monochrome) có độ nhạy sáng cao hơn so với camera màu (colour).

  Khối lượng dữ liệu (Data volume): Ảnh màu (colour) có khối lượng dữ liệu lớn hơn nhiều so với ảnh đơn sắc (monochrome).

  Phân tích màu sắc (Colour analysis): Ảnh màu (colour) cho phép thực hiện các phân tích màu sắc bổ sung, để phân biệt các đối tượng có cùng độ sáng nhưng màu sắc khác nhau.

  Độ chính xác đo lường (Measurement accuracy): Ảnh từ camera màu 1 chip có thể bị giảm độ chính xác đo lường do sự nội suy màu Bayer.

  Vì vậy, việc lựa chọn camera đơn sắc hay màu phụ thuộc vào yêu cầu cụ thể của ứng dụng, cân nhắc các ưu điểm và hạn chế của mỗi loại cảm biến.

Ngoài những điều trên còn rất nhiều yếu tố khác liên quan như hãng camera, thông số độ bền,....


:::tip Tóm lại
Việc lựa chọn camera phù hợp có vai trò quyết định đến việc thu thập được các đặc tính kiểm tra chính xác. Do đó, đây là yếu tố rất đáng được xem xét kỹ lưỡng. 
  :::
