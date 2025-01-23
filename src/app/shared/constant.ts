export default class {
  static readonly LIST_QUESTIONS = [
    {
      name: 'bienhoa',
      questions: [
        {
          id: '1',
          question: 'Thành phố Biên Hòa tiếp giáp với những tỉnh, thành nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Dương, TP Hồ Chí Minh.' },
            { id: 'B', text: 'Tỉnh Bình Phước, Bình Thuận.' },
            { id: 'C', text: 'Tỉnh Tây Ninh, Bà Rịa-Vũng Tàu.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '2',
          question:
            'Những địa điểm tham quan, du lịch nổi tiếng ở thành phố Biên Hòa là:',
          options: [
            {
              id: 'A',
              text: 'Suối Mơ, thác Giang Điền, đảo Ó, khu du lịch Bò Cạp Vàng,...',
            },
            {
              id: 'B',
              text: 'Khu du lịch văn hóa Bửu Long, văn miếu Trấn Biên, Lăng mộ Trịnh Hoài Đức,...',
            },
            { id: 'C', text: 'Khu du lịch Đầm Sen, Suối Tiên, Đại Nam,...' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '3',
          question: 'Thành phố Biên Hòa là đô thị loại mấy?',
          options: [
            { id: 'A', text: 'Loại I.' },
            { id: 'B', text: 'Loại II.' },
            { id: 'C', text: 'Loại III.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '4',
          question: 'Thành phố Biên Hòa nằm bên bờ sông nào?',
          options: [
            { id: 'A', text: 'Sông Hồng.' },
            { id: 'B', text: 'Sông Cửu Long.' },
            { id: 'C', text: 'Sông Đồng Nai.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question: 'Thành phố Biên Hòa tiếp giáp với những huyện nào?',
          options: [
            { id: 'A', text: 'Huyện Xuân Lộc, huyện Tân Phú, huyện Cẩm Mỹ.' },
            {
              id: 'B',
              text: 'Huyện Vĩnh Cửu, huyện Long Thành, huyện Trảng Bom.',
            },
            {
              id: 'C',
              text: 'Huyện Thống Nhất, huyện Định Quán, huyện Nhơn Trạch.',
            },
          ],
          correctAnswer: 'B',
        },
        {
          id: '6',
          question: 'Kể tên một số khu công nghiệp lớn ở thành phố Biên Hòa.',
          options: [
            {
              id: 'A',
              text: 'Khu công nghiệp Biên Hòa 1, Biên Hòa 2, khu công nghiệp Amata, khu công nghiệp Loteco,...',
            },
            {
              id: 'B',
              text: 'Khu công nghiệp Nhơn Trạch, khu công nghiệp Sông Mây, khu công nghiệp Long Đức,...',
            },
            {
              id: 'C',
              text: 'Khu công nghiệp Bàu Xéo, khu công nghiệp An Phú Đông, khu công nghiệp Long Khánh,...',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '7',
          question:
            'Từ thích hợp điền vào chỗ chấm trong câu sau là: “Thành phố Biên Hòa là đầu mối giao thông quan trọng của vùng ……..”',
          options: [
            { id: 'A', text: 'Đông Nam Bộ.' },
            { id: 'B', text: 'Tây Nam Bộ.' },
            { id: 'C', text: 'Nam Bộ.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '8',
          question:
            'Điều kiện nào giúp thành phố Biên Hòa trở thành trung tâm kinh tế, văn hóa, khoa học kĩ thuật của tỉnh Đồng Nai?',
          options: [
            {
              id: 'A',
              text: 'Vì thành phố Biên Hòa nằm trong vùng kinh tế trọng điểm phía Nam, là đầu mối giao thông quan trọng của vùng Đông Nam Bộ, nơi đây tập trung nhiều trường đại học, cao đẳng và các khu công nghiệp.',
            },
            {
              id: 'B',
              text: 'Vì thành phố Biên Hòa là nơi tập trung nhiều cơ quan, đơn vị chủ chốt đóng trên địa bàn.',
            },
            {
              id: 'C',
              text: 'Vì quỹ đất rộng, dân cư đông đúc, người lao động có trình độ cao.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '9',
          question:
            'Những làng nghề thủ công truyền thống nổi tiếng ở thành phố Biên Hòa là:',
          options: [
            {
              id: 'A',
              text: 'Nghề gốm, điêu khắc (Bửu Long, Tân Vạn, Tân Hạnh,...); khai thác đá, vật liệu xây dựng (Bửu Long); gỗ (Tân Hoà)',
            },
            {
              id: 'B',
              text: 'Nghề gốm, điêu khắc (Tân Hoà, …); khai thác đá, vật liệu xây dựng (An Bình); gỗ (Bửu Long, Tân Vạn, Tân Hạnh,...)',
            },
            {
              id: 'C',
              text: 'Nghề gốm, điêu khắc (Tân Hoà,...); khai thác đá, vật liệu xây dựng (Tân Vạn, Tân Hạnh,...); gỗ (Bửu Long)',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Vì sao nói thành phố Biên Hòa là trung tâm chính trị của tỉnh Đồng Nai?',
          options: [
            {
              id: 'A',
              text: 'Vì thành phố Biên Hòa nằm trong vùng kinh tế trọng điểm phía Nam, là đầu mối giao thông quan trọng của vùng Đông Nam Bộ.',
            },
            {
              id: 'B',
              text: 'Vì nơi đây tập trung nhiều trường đại học, cao đẳng và các khu công nghiệp.',
            },
            {
              id: 'C',
              text: 'Vì thành phố Biên Hòa là nơi tập trung nhiều cơ quan, đơn vị chủ chốt của tỉnh Đồng Nai.',
            },
          ],
          correctAnswer: 'C',
        },
      ],
    },
    {
      name: 'cammy',
      questions: [
        {
          id: '1',
          question: 'Huyện Cẩm Mỹ có diện tích là:',
          options: [
            { id: 'A', text: '46,855 km <sup>2</sup>' },
            { id: 'B', text: '46 855 km <sup>2</sup>' },
            { id: 'C', text: '468,55 km <sup>2</sup>' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '2',
          question: 'Nêu vị trí địa lí của huyện Cẩm Mỹ.',
          options: [
            { id: 'A', text: 'Huyện Cẩm Mỹ nằm ở phía nam tỉnh Đồng Nai.' },
            { id: 'B', text: 'Huyện Cẩm Mỹ nằm ở phía bắc tỉnh Đồng Nai.' },
            { id: 'C', text: 'Huyện Cẩm Mỹ nằm ở phía đông tỉnh Đồng Nai.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '3',
          question: 'Huyện Cẩm Mỹ giáp với tỉnh Bà Rịa-Vũng Tàu ở phía nào?',
          options: [
            { id: 'A', text: 'Phía nam và tây nam.' },
            { id: 'B', text: 'Phía tây và đông nam.' },
            { id: 'C', text: 'Phía nam và đông nam.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Trong trồng trọt, huyện có thế mạnh phát triển những loại cây nào?',
          options: [
            { id: 'A', text: 'Cây lấy gỗ, dược liệu.' },
            { id: 'B', text: 'Cây hoa màu, các loại rau, đậu,..' },
            { id: 'C', text: 'Cây lương thực và cây công nghiệp .' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question:
            'Cẩm Mỹ có thuận lợi gì cho việc phát triển các loại cây lương thực (lúa, bắp, khoai lang) và rau, đậu cho năng suất, chất lượng cao.',
          options: [
            {
              id: 'A',
              text: 'Nhờ đặc điểm đất đai màu mỡ, khí hậu thích hợp.',
            },
            { id: 'B', text: 'Nhờ Cẩm Mỹ gần các thị trường tiêu thụ lớn.' },
            {
              id: 'C',
              text: 'Nhờ đặc điểm đất đai, khí hậu thích hợp, gần thị trường tiêu thụ.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '6',
          question:
            'Vào năm 2014, Cẩm Mỹ trở thành địa phương trồng cây công nghiệp lâu năm (cà phê, cao su, tiêu, điều) lớn thứ mấy của tỉnh?',
          options: [
            { id: 'A', text: 'Thứ nhất' },
            { id: 'B', text: 'Thứ hai' },
            { id: 'C', text: 'Thứ ba' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '7',
          question:
            'Sản lượng cà phê của huyện Cẩm Mỹ dẫn đầu tỉnh Đồng Nai vào năm nào?',
          options: [
            { id: 'A', text: 'Năm 2004' },
            { id: 'B', text: 'Năm 2010' },
            { id: 'C', text: 'Năm 2014' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '8',
          question: 'Loại cây đặc sản quan trọng của huyện Cẩm Mỹ là:',
          options: [
            { id: 'A', text: 'Cây măng cụt' },
            { id: 'B', text: 'Cây sầu riêng' },
            { id: 'C', text: 'Cây chôm chôm' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '9',
          question:
            'Nguyên nhân nào giúp huyện Cẩm Mỹ trở thành địa phương chuyên canh sầu riêng của tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: 'Nhờ đất đai phì nhiêu, khí hậu thích hợp.' },
            { id: 'B', text: 'Nhờ người dân có kinh nghiệm trồng sầu riêng.' },
            {
              id: 'C',
              text: 'Nhờ đất đai phì nhiêu, khí hậu thích hợp, người dân có kinh nghiệm trồng sầu riêng.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '10',
          question:
            'Cẩm Mỹ là địa phương chuyên canh sầu riêng của tỉnh Đồng Nai. Tuy nhiên, giá trị và lợi nhuận sản xuất chưa tương xứng với tiềm năng vốn có của huyện. Vì sao?',
          options: [
            {
              id: 'A',
              text: 'Vì phụ thuộc vào thị trường đầu ra, giống và vốn đầu tư trồng sầu riêng cao.',
            },
            { id: 'B', text: 'Vì giống cây trồng có giá thành cao.' },
            { id: 'C', text: 'Vì thị trường tiêu thụ hạn hẹp.' },
          ],
          correctAnswer: 'A',
        },
      ],
    },
    {
      name: 'dinhquan',
      questions: [
        {
          id: '1',
          question: 'Nêu vị trí địa lí của huyện Định Quán.',
          options: [
            {
              id: 'A',
              text: 'Huyện Định Quán nằm ở phía bắc của tỉnh Đồng Nai.',
            },
            {
              id: 'B',
              text: 'Huyện Định Quán nằm ở phía đông của tỉnh Đồng Nai.',
            },
            {
              id: 'C',
              text: 'Huyện Định Quán nằm ở phía đông của tỉnh Đồng Nai.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '2',
          question:
            'Định Quán giáp với các huyện Xuân Lộc, Thống Nhất, Trảng Bom và TP. Long Khánh ở phía nào?',
          options: [
            { id: 'A', text: 'Phía đông' },
            { id: 'B', text: 'Phía nam' },
            { id: 'C', text: 'Phía bắc' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '3',
          question: 'Phía đông của huyện Định Quán giáp với tỉnh nào?',
          options: [
            { id: 'A', text: 'TỈnh Bình Thuận' },
            { id: 'B', text: 'Tỉnh Bình Dương' },
            { id: 'C', text: 'Tỉnh Bình Phước' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '4',
          question:
            'Huyện Định Quán có những lợi thế để phát triển ngành nghề nào?',
          options: [
            {
              id: 'A',
              text: 'Nuôi trồng thủy sản, trồng cây lương thực và chăn nuôi gia súc.',
            },
            {
              id: 'B',
              text: 'Nuôi trồng thủy sản, trồng rừng và chăn nuôi gia cầm.',
            },
            {
              id: 'C',
              text: 'Nuôi trồng thủy sản, trồng cây ăn trái và cây công nghiệp lâu năm .',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question:
            'Vào năm nào, huyện Định Quán có diện tích và sản lượng điều cao nhất tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: 'Năm 2014' },
            { id: 'B', text: 'Năm 2015' },
            { id: 'C', text: 'Năm 2016' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '6',
          question:
            'Vào năm 2014, huyện Định Quán có diện tích và sản lượng cà phê cao thứ mấy của tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: 'Thứ nhất.' },
            { id: 'B', text: 'Thứ hai (sau huyện Cẩm Mỹ).' },
            { id: 'C', text: 'Thứ ba (sau huyện Cẩm Mỹ, Trảng Bom).' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '7',
          question:
            'Huyện Định Quán chú trọng phát triển mạnh các loại cây ăn trái nhờ vào lợi thế nào?',
          options: [
            {
              id: 'A',
              text: 'Lợi thế về đất đai, khí hậu, kinh nghiệm của người dân.',
            },
            { id: 'B', text: 'Lợi thế về vị trí địa lí thuận lợi.' },
            {
              id: 'C',
              text: 'Lợi thế về diện tích mặt nước lớn, nhiều sông suối, ao hồ.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '8',
          question:
            'Từ thích hợp để điền vào chỗ chấm trong câu sau là: <br/>“Huyện Định Quán là vùng …… quan trọng của tỉnh Đồng Nai.”',
          options: [
            { id: 'A', text: 'nuôi trồng thủy sản.' },
            { id: 'B', text: 'chăn nuôi gia cầm.' },
            { id: 'C', text: 'trồng cây công nghiệp.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '9',
          question:
            'Nghề nuôi cá bè trên sông, trên hồ Trị An phát triển nhanh đã đem đến lợi ích gì cho người dân nơi đây?',
          options: [
            {
              id: 'A',
              text: 'Góp phần tạo công ăn việc làm và tăng thu nhập cho người dân địa phương.',
            },
            {
              id: 'B',
              text: 'Góp phần tạo công ăn việc làm người dân địa phương.',
            },
            {
              id: 'C',
              text: 'Góp phần tạo tăng thu nhập cho người dân địa phương.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Những lí do nào giúp huyện Định Quán trở thành vùng nuôi trồng thủy sản quan trọng của tỉnh Đồng Nai?',
          options: [
            {
              id: 'A',
              text: 'Ứng dụng và cải tiến kĩ thuật nuôi trồng, sử dụng diện tích mặt nước hiệu quả, đầu tư vốn lớn.',
            },
            {
              id: 'B',
              text: 'Diện tích mặt nước lớn, nhiều sông suối, ao hồ, sử dụng diện tích mặt nước hiệu quả.',
            },
            {
              id: 'C',
              text: 'Diện tích mặt nước lớn, nhiều sông suối, ao hồ, sử dụng diện tích mặt nước hiệu quả, ứng dụng và cải tiến kĩ thuật nuôi trồng, đầu tư vốn lớn.',
            },
          ],
          correctAnswer: 'C',
        },
      ],
    },
    {
      name: 'longkhanh',
      questions: [
        {
          id: '1',
          question: 'Thành phố Long Khánh có diện tích là:',
          options: [
            { id: 'A', text: '191,86 ki-lô-mét vuông.' },
            { id: 'B', text: '19,186 ki-lô-mét vuông.' },
            { id: 'C', text: '1,9186 ki-lô-mét vuông.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '2',
          question:
            'Từ thích hợp để điền vào chỗ chấm là:<br/>Thành phố Long Khánh nằm ở khu vực ……………… tỉnh Đồng Nai.',
          options: [
            { id: 'A', text: 'trung tâm' },
            { id: 'B', text: 'ngoại ô' },
            { id: 'C', text: 'phía đông nam' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '3',
          question:
            'Thị xã Long Khánh được công nhận là thành phố Long Khánh vào ngày, tháng, năm nào?',
          options: [
            { id: 'A', text: '1/6/2018.' },
            { id: 'B', text: '1/6/2019.' },
            { id: 'C', text: '1/6/2020.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Giá trị thương mại – dịch vụ của thành phố Long Khánh đứng thứ mấy toàn tỉnh?',
          options: [
            { id: 'A', text: 'Thứ nhất' },
            { id: 'B', text: 'Thứ hai' },
            { id: 'C', text: 'Thứ ba' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '5',
          question:
            'Từ thích hợp để điền vào chỗ chấm là:<br/>Thành phố Long Khánh được xem là trung tâm của ……………',
          options: [
            { id: 'A', text: 'Cây ăn trái vùng nhiệt đới.' },
            { id: 'B', text: 'Cây công nghiệp lâu năm.' },
            { id: 'C', text: 'Các loại rau, đậu.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '6',
          question:
            'Nguyên nhân chính nào để các trung tâm buôn bán hiện đại có thể được hình thành ở thành phố Long Khánh?',
          options: [
            { id: 'A', text: 'Hàng hóa đa dạng, dân cư đông đúc.' },
            {
              id: 'B',
              text: 'Giao thông thuận lợi, đời sống người dân ngày càng cao.',
            },
            { id: 'C', text: 'Tạo điều kiện việc làm cho người dân' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '7',
          question:
            'Thị trường tiêu thụ chủ yếu của các loại cây ăn trái của thành phố Long Khánh là:',
          options: [
            {
              id: 'A',
              text: 'Tiêu thụ tại chỗ và cung cấp cho khu vực lân cận, đặc biệt là thành phố Đà Lạt.',
            },
            {
              id: 'B',
              text: 'Tiêu thụ tại chỗ và cung cấp cho khu vực lân cận, đặc biệt là thành phố Đà Lạt.',
            },
            {
              id: 'C',
              text: 'Tiêu thụ tại chỗ và cung cấp cho khu vực lân cận, đặc biệt là các thành phố lớn phía bắc.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '8',
          question:
            'Địa điểm du lịch nào dưới đây KHÔNG thuộc địa phận thành phố Long Khánh?',
          options: [
            { id: 'A', text: 'Khu du lịch Suối Tre.' },
            { id: 'B', text: 'Khu du lịch Suối Tre.' },
            { id: 'C', text: 'Khu du lịch Bửu Long.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '9',
          question:
            'Các loại cây ăn trái tiêu biểu của thành phố Long Khánh là:',
          options: [
            { id: 'A', text: 'Táo, nhãn, vải, đào, hồng, cam, quýt,...' },
            {
              id: 'B',
              text: 'Sầu riêng, chôm chôm, chuối, xoài, măng cụt,...',
            },
            {
              id: 'C',
              text: 'Cam, bưởi, chanh, mãng cầu, dưa hấu, thanh long,...',
            },
          ],
          correctAnswer: 'B',
        },
        {
          id: '10',
          question: 'Kể tên một số Khu công nghiệp thuộc thành phố Long Khánh.',
          options: [
            {
              id: 'A',
              text: 'KCN Long Khánh, cụm công nghiệp Suối Tre, Xuân Tân,...',
            },
            { id: 'B', text: 'KCN Long Khánh, Sông Mây, Amata, Hố Nai,...' },
            {
              id: 'C',
              text: 'Cụm công nghiệp Suối Tre, Amata, Phú Hữu, Phước An,...',
            },
          ],
          correctAnswer: 'A',
        },
      ],
    },
    {
      name: 'longthanh',
      questions: [
        {
          id: '1',
          question: 'Huyện Long Thành có diện tích là:',
          options: [
            { id: 'A', text: '43,066 km <sup>2</sup>' },
            { id: 'B', text: '43 066 km <sup>2</sup>' },
            { id: 'C', text: '430,66 km <sup>2</sup>' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '2',
          question: 'Nêu vị trí địa lí của huyện Long Thành.',
          options: [
            {
              id: 'A',
              text: 'Huyện Long Thành nằm ở phía tây nam tỉnh Đồng Nai.',
            },
            {
              id: 'B',
              text: 'Huyện Long Thành nằm ở phía tây bắc tỉnh Đồng Nai.',
            },
            {
              id: 'C',
              text: 'Huyện Long Thành nằm ở phía đông nam tỉnh Đồng Nai.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '3',
          question: 'Huyện Long Thành giáp với thành phố Biên Hòa ở phía nào?',
          options: [
            { id: 'A', text: 'Phía nam' },
            { id: 'B', text: 'Phía tây' },
            { id: 'C', text: 'Phía bắc' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Những điều kiện thuận lợi nào đã giúp huyện Long Thành trở thành địa phương chuyên chăn nuôi bò sữa?',
          options: [
            { id: 'A', text: 'Khí hậu thuận lợi, gần thị trường tiêu thụ.' },
            {
              id: 'B',
              text: 'Tăng cường áp dụng các thành tựu khoa học kĩ thuật vào sản xuất.',
            },
            {
              id: 'C',
              text: 'Khí hậu thuận lợi, gần thị trường tiêu thụ, tăng cường áp dụng các thành tựu khoa học kĩ thuật vào sản xuất.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question:
            'Huyện đã đầu tư cho việc chăn nuôi đàn bò sữa Long Thành như thế nào?',
          options: [
            {
              id: 'A',
              text: 'Đầu tư từ khâu giống, thức ăn, chăn nuôi theo mô hình hộ gia đình.',
            },
            {
              id: 'B',
              text: 'Đầu tư lớn từ khâu giống, thức ăn, công tác thú y theo mô hình công nghiệp.',
            },
            {
              id: 'C',
              text: 'Đầu tư từ khâu chọn giống, thức ăn, chăn nuôi theo mô hình vườn-ao-chuồng.',
            },
          ],
          correctAnswer: 'B',
        },
        {
          id: '6',
          question:
            'Sản phẩm chế biến từ sữa bò Long Thành được tiêu thụ như thế nào?',
          options: [
            {
              id: 'A',
              text: 'Chủ yếu tiêu thụ trong nước dưới nhiều hình thức và mẫu mã đa dạng.',
            },
            { id: 'B', text: 'Chủ yếu xuất khẩu ra nước ngoài.' },
            {
              id: 'C',
              text: 'Tiêu thụ trong nước và xuất khẩu ra thị trường nước ngoài dưới nhiều hình thức và mẫu mã đa dạng',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '7',
          question: 'Huyện Long Thành không giáp với thành phố nào?',
          options: [
            { id: 'A', text: 'Thành phố Biên Hòa.' },
            { id: 'B', text: 'Thành phố Long Khánh.' },
            { id: 'C', text: 'Thành phố Hồ Chí Minh.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '8',
          question:
            'Vì sao thời gian gần đây huyện Long Thành chú trọng đầu tư xây dựng hạ tầng giao thông, kinh tế, văn hóa và khoa học mang tầm vóc khu vực và cả nước?',
          options: [
            {
              id: 'A',
              text: 'Nhờ có vị trí địa lí thuận lợi, gần hệ thống đường giao thông thủy, bộ dày đặc, quỹ đất còn khá lớn.',
            },
            {
              id: 'B',
              text: 'Nhờ dân cư đông đúc, người lao động có trình độ cao, người dân có nhiều kinh nghiệm trong chăn nuôi bò sữa.',
            },
            {
              id: 'C',
              text: 'Nhờ vị trí địa lí thuận lợi, quỹ đất rộng, nhiều đồng cỏ để chăn nuôi, trồng trọt.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '9',
          question:
            'Ở Long Thành đang xây dựng một cảng hàng không có quy mô và tầm vóc quốc gia. Đó là cảng hàng không nào?',
          options: [
            { id: 'A', text: 'Cảng hàng không quốc tế Long Thành.' },
            { id: 'B', text: 'Cảng hàng không quốc tế Biên Hòa.' },
            { id: 'C', text: 'Cảng hàng không quốc tế Biên Hòa.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '10',
          question:
            'Vì sao nói: “Huyện long Thành hội tụ đầy đủ các điều kiện để trở thành trung tâm kinh tế, văn hóa, khoa học và đầu mối giao thông vận tải trong tương lai.”?',
          options: [
            {
              id: 'A',
              text: 'Long Thành có vị trí địa lí thuận lợi, gần hệ thống đường giao thông thủy, bộ dày đặc, quỹ đất còn khá lớn, khí hậu thuận lợi, gần thị trường tiêu thụ lớn.',
            },
            {
              id: 'B',
              text: 'Huyện chú trọng đầu tư xây dựng cảng hàng không quốc tế lớn nhất Việt Nam; xây dựng hạ tầng giao thông, kinh tế, văn hóa và khoa học mang tầm vóc khu vực và cả nước.',
            },
            { id: 'C', text: 'Cả A và B đều đúng' },
          ],
          correctAnswer: 'C',
        },
      ],
    },
    {
      name: 'nhontrach',
      questions: [
        {
          id: '1',
          question: 'Nêu vị trí địa lí của huyện Nhơn Trạch.',
          options: [
            {
              id: 'A',
              text: 'Huyện Nhơn Trạch nằm ở phía tây nam tỉnh Đồng Nai.',
            },
            {
              id: 'B',
              text: 'Huyện Nhơn Trạch nằm ở phía tây bắc tỉnh Đồng Nai.',
            },
            {
              id: 'C',
              text: 'Huyện Nhơn Trạch nằm ở phía đông nam tỉnh Đồng Nai.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '2',
          question: 'Phía tây và nam huyện Nhơn Trạch giáp với tỉnh nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Dương.' },
            { id: 'B', text: 'Tỉnh Bình Thuận.' },
            { id: 'C', text: 'Tỉnh Bà Rịa – Vũng Tàu.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '3',
          question:
            'Huyện Nhơn Trạch giáp với thành phố Hồ Chí Minh ở phía nào?',
          options: [
            { id: 'A', text: 'Phía tây và đông.' },
            { id: 'B', text: 'Phía tây và bắc.' },
            { id: 'C', text: 'v' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question: 'Nhơn Trạch có thế mạnh phát triển về những ngành nào?',
          options: [
            { id: 'A', text: 'Dịch vụ - nông nghiệp - đô thị cảng.' },
            { id: 'B', text: 'Dịch vụ - công nghiệp - đô thị cảng.' },
            { id: 'C', text: 'Dịch vụ - nông nghiệp - công nghiệp.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '5',
          question:
            'Nhơn Trạch có thế mạnh phát triển về dịch vụ - công nghiệp - đô thị cảng nhờ những lợi thế nào?',
          options: [
            {
              id: 'A',
              text: 'Xây dựng hệ thống đường giao thông mới, các cụm cảng lớn và dịch vụ cảng phát triển.',
            },
            {
              id: 'B',
              text: 'Phát triển các khu công nghiệp gắn liền với hệ thống cảng; hoàn thiện mạng lưới chợ, siêu thị, trung tâm thương mại.',
            },
            { id: 'C', text: 'Cả A và B đều đúng.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '6',
          question: 'Kể tên một số cảng lớn của huyện Nhơn Trạch.',
          options: [
            {
              id: 'A',
              text: 'Cảng Thị Vải, Phước An, Phú Hữu 1, Phú Hữu 2,...',
            },
            {
              id: 'B',
              text: 'Cảng Nhơn Trạch, Phước An, Phú Hữu 1, Phú Hữu 2,...',
            },
            {
              id: 'C',
              text: 'Cảng Thị Vải, Nhơn Trạch, Phú Hữu 1, Phú Hữu 2,...',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '7',
          question: 'Loại hình du lịch chủ yếu ở huyện Nhơn Trạch là:',
          options: [
            {
              id: 'A',
              text: 'Du lịch sinh thái, du lịch văn hóa, du lịch biển.',
            },
            {
              id: 'B',
              text: 'Du lịch sinh thái và du lịch văn hóa, tín ngưỡng.',
            },
            { id: 'C', text: 'Du lịch văn hóa, tín ngưỡng và du lịch biển.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '8',
          question: 'Loại hình du lịch sinh thái ở huyện Nhơn Trạch gồm có:',
          options: [
            {
              id: 'A',
              text: 'Du lịch sinh thái vườn, du lịch sinh thái sông nước, du lịch sinh thái rừng ngập mặn.',
            },
            {
              id: 'B',
              text: 'Du lịch sinh thái vườn, du lịch sinh thái sông nước, du lịch sinh thái rừng rậm nhiệt đới.',
            },
            {
              id: 'C',
              text: 'Du lịch sinh thái vườn, du lịch sinh thái sông nước, du lịch sinh thái biển.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '9',
          question:
            'Một số địa điểm du lịch sinh thái nổi tiếng của huyện Nhơn Trạch là:',
          options: [
            {
              id: 'A',
              text: 'Khu du lịch Ông Kèo, Bò Cạp Vàng, vườn (Long Tân, Phú Hội); rừng ngập mặn (Phước An),...',
            },
            {
              id: 'B',
              text: 'Khu du lịch Ông Kèo, Bò Cạp Vàng, Suối Tiên, Đầm Sen, rừng ngập mặn Cần Giờ,...',
            },
            {
              id: 'C',
              text: 'Khu du lịch Ông Kèo, Bò Cạp Vàng, Đại Nam; rừng nguyên sinh Nam Cát Tiên,...',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question: 'Huyện Nhơn Trạch có diện tích là:',
          options: [
            { id: 'A', text: '4,1078 km <sup>2</sup>.' },
            { id: 'B', text: '41,078 km <sup>2</sup>.' },
            { id: 'C', text: '410,78 km <sup>2</sup>.' },
          ],
          correctAnswer: 'C',
        },
      ],
    },
    {
      name: 'tanphu',
      questions: [
        {
          id: '1',
          question: 'Huyện Tân Phú nằm ở phía nào của tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: 'Phía đông nam' },
            { id: 'B', text: 'Phía tây nam' },
            { id: 'C', text: 'Phía đông bắc' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '2',
          question: 'Huyện Tân Phú tiếp giáp những tỉnh nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Thuận, Bình Dương, Bình Phước.' },
            { id: 'B', text: 'Tỉnh Bình Thuận, Bình Phước, Tây Ninh.' },
            { id: 'C', text: 'Tỉnh Bình Thuận, Bình Phước, Lâm Đồng.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '3',
          question: 'Huyện nào giáp với Tân Phú ở phía tây và tây nam?',
          options: [
            { id: 'A', text: 'Định Quán, Vĩnh Cửu.' },
            { id: 'B', text: 'Định Quán, Nhơn Trạch.' },
            { id: 'C', text: 'Trảng Bom, Xuân Lộc.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '4',
          question:
            'Huyện Tân Phú là địa bàn chuyển tiếp giữa Đồng Nai với các tỉnh nào?',
          options: [
            { id: 'A', text: 'Tây Bắc' },
            { id: 'B', text: 'Tây Ninh' },
            { id: 'C', text: 'Tây Nguyên' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question: 'Huyện Tân Phú giáp tỉnh Lâm Đồng ở phía nào?',
          options: [
            { id: 'A', text: 'Đông bắc' },
            { id: 'B', text: 'Đông nam' },
            { id: 'C', text: 'Tây nam' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '6',
          question: 'Diện tích của huyện Tân Phú là:',
          options: [
            { id: 'A', text: '776,93 km <sup>2</sup>.' },
            { id: 'B', text: '108,6 km <sup>2</sup> .' },
            { id: 'C', text: '802,13 km <sup>2</sup> .' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '7',
          question:
            'Huyện Tân Phú là …….. phía đông bắc của tỉnh Đồng Nai, địa bàn chuyển tiếp giữa Đồng Nai với các tỉnh Tây Nguyên. <br/>Từ thích hợp cần điền vào chỗ chấm trong câu trên là:',
          options: [
            { id: 'A', text: 'cửa ngõ' },
            { id: 'B', text: 'cửa sổ' },
            { id: 'C', text: 'cửa biển' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '8',
          question:
            'Tân Phú là huyện có diện tích và sản lượng cây lương thực lớn thứ mấy của tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: 'Thứ nhất' },
            { id: 'B', text: 'Thứ hai' },
            { id: 'C', text: 'Thứ ba' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '9',
          question: 'Năm 2013, huyện Tân Phú đứng đầu tỉnh Đồng Nai về:',
          options: [
            { id: 'A', text: 'Sản lượng hồ tiêu.' },
            { id: 'B', text: 'Sản lượng điều.' },
            { id: 'C', text: 'Sản lượng lúa.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Trong nông nghiệp, huyện Tân Phú có điều kiện tự nhiên thuận lợi để phát triển những loại cây trồng nào?',
          options: [
            {
              id: 'A',
              text: 'Các cây lương thực, thực phẩm, cây ăn trái và cây công nghiệp lâu năm.',
            },
            { id: 'B', text: 'Các cây lương thực, thực phẩm và cây ăn trái.' },
            { id: 'C', text: 'Cây công nghiệp lâu năm và cây hoa màu.' },
          ],
          correctAnswer: 'A',
        },
      ],
    },
    {
      name: 'thongnhat',
      questions: [
        {
          id: '1',
          question: 'Huyện Thống Nhất có diện tích là:',
          options: [
            { id: 'A', text: '2472,4 km <sup>2</sup>' },
            { id: 'B', text: '24,724 km <sup>2</sup>' },
            { id: 'C', text: '247,24 km <sup>2</sup>' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '2',
          question: 'Nêu vị trí địa lí của huyện Thống Nhất.',
          options: [
            {
              id: 'A',
              text: 'Huyện Thống Nhất nằm ở khu vực trung tâm tỉnh Đồng Nai.',
            },
            {
              id: 'B',
              text: 'Huyện Thống Nhất nằm ở phía tây bắc tỉnh Đồng Nai.',
            },
            {
              id: 'C',
              text: 'Huyện Thống Nhất nằm ở phía đông nam tỉnh Đồng Nai.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '3',
          question:
            'Huyện Thống Nhất giáp với thành phố Long Khánh ở phía nào?',
          options: [
            { id: 'A', text: 'Phía nam' },
            { id: 'B', text: 'Phía tây' },
            { id: 'C', text: 'Phía đông' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Trong trồng trọt, huyện có tiềm năng rất lớn trong việc trồng các loại cây nào?',
          options: [
            {
              id: 'A',
              text: 'Trồng các loại rau, đậu, cây công nghiệp lâu năm (cao su, cà phê).',
            },
            {
              id: 'B',
              text: 'Trồng cây ăn trái (chôm chôm, chuối, măng cụt…).',
            },
            { id: 'C', text: 'Cả A và B đều đúng.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question:
            'Thống Nhất có thuận lợi gì cho phát triển thương mại, dịch vụ trong và ngoài tỉnh?',
          options: [
            { id: 'A', text: 'Quỹ đất rộng.' },
            { id: 'B', text: 'Nhiều mỏ khoáng sản.' },
            { id: 'C', text: 'Vị trí địa lí thuận lợi.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '6',
          question:
            'Về chăn nuôi, Thống Nhất là huyện có số lượng heo đứng thứ mấy toàn tỉnh?',
          options: [
            { id: 'A', text: 'Thứ nhất' },
            { id: 'B', text: 'Thứ hai' },
            { id: 'C', text: 'Thú ba' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '7',
          question:
            'Vào năm 2014, huyện Thống Nhất có số lượng đàn gia cầm đứng thứ ba, chỉ sau những huyện nào?',
          options: [
            { id: 'A', text: 'Huyện Xuân Lộc và Long Thành.' },
            { id: 'B', text: 'Huyện Xuân Lộc và Trảng Bom.' },
            { id: 'C', text: 'Huyện Cẩm Mỹ và Trảng Bom.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '8',
          question:
            'Nguyên nhân giúp huyện Thống Nhất có số lượng đàn gia cầm đứng thứ ba (sau huyện Xuân Lộc và Trảng Bom) vào năm 2014 là:',
          options: [
            {
              id: 'A',
              text: 'Nhờ tận dụng lượng thức ăn từ trồng trọt và áp dụng các tiến bộ của ngành thú y vào chăn nuôi.',
            },
            {
              id: 'B',
              text: 'Nhờ người dân có nhiều kinh nghiệm trong chăn nuôi gia cầm.',
            },
            { id: 'C', text: 'Nhờ vị trí địa lí thuận lợi và quỹ đất rộng.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '9',
          question:
            'Thời gian gần đây, huyện Thống Nhất ưu tiên phát triển những ngành nào?',
          options: [
            {
              id: 'A',
              text: 'Công nghiệp, dịch vụ và phát triển nông nghiệp ứng dụng công nghệ cao.',
            },
            {
              id: 'B',
              text: 'Công nghiệp, dịch vụ và phát triển nông nghiệp truyền thống.',
            },
            { id: 'C', text: 'Công nghiệp, dịch vụ và phát triển du lịch.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Về công nghiệp, trên địa bàn huyện đã hình thành các khu công nghiệp và cụm công nghiệp như:',
          options: [
            {
              id: 'A',
              text: 'Gia Kiệm, Hưng Lộc, Quang Trung, Dầu Giây và Khu liên hợp công -nông nghiệp Donataba,...',
            },
            {
              id: 'B',
              text: 'Gia Kiệm, Hưng Lộc, Quang Trung, Dầu Giây và Khu liên hợp công -nông nghiệp',
            },
            {
              id: 'C',
              text: 'Khu công nghiệp Biên Hòa 1, Biên Hòa 2, Long Bình, A-ma-ta,...',
            },
          ],
          correctAnswer: 'A',
        },
      ],
    },
    {
      name: 'trangbom',
      questions: [
        {
          id: '1',
          question: 'Huyện Trảng Bom có diện tích là:',
          options: [
            { id: 'A', text: '3 239 km <sup>2</sup>' },
            { id: 'B', text: '32 369 km <sup>2</sup>' },
            { id: 'C', text: '323,69 km <sup>2</sup>' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '2',
          question: 'Nêu vị trí địa lí của huyện Trảng Bom.',
          options: [
            {
              id: 'A',
              text: 'Huyện Trảng Bom nằm ở khu vực trung tâm tỉnh Đồng Nai.',
            },
            { id: 'B', text: 'Huyện Trảng Bom nằm ở phía bắc tỉnh Đồng Nai.' },
            { id: 'C', text: 'Huyện Trảng Bom nằm ở phía đông tỉnh Đồng Nai.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '3',
          question: 'Huyện Trảng Bom giáp với thành phố Biên Hòa ở phía nào?',
          options: [
            { id: 'A', text: 'Phía đông.' },
            { id: 'B', text: 'Phía nam.' },
            { id: 'C', text: 'Phía tây.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Trong chăn nuôi, huyện Trảng Bom tập trung phát triển các đàn gia cầm lớn (gà, vịt, ngỗng ...) nhằm mục đích gì?',
          options: [
            {
              id: 'A',
              text: 'Để tận dụng nguồn phụ phẩm trong trồng trọt, giải quyết nguồn lao động.',
            },
            {
              id: 'B',
              text: 'Để tạo nguồn nguyên liệu cho ngành công nghiệp chế biến thực phẩm.',
            },
            { id: 'C', text: 'Cả A và B đều đúng.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '5',
          question:
            'Sản lượng thủy sản của huyện Trảng Bom đứng thứ mấy của tỉnh?',
          options: [
            { id: 'A', text: 'Thứ nhất.' },
            { id: 'B', text: 'Thứ hai.' },
            { id: 'C', text: 'Thứ ba.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '6',
          question:
            'Trảng Bom đã có biện pháp gì để tăng sản lượng nuôi trồng thủy sản?',
          options: [
            {
              id: 'A',
              text: 'Huyện đã sử dụng diện tích mặt nước tự nhiên và chú trọng đầu tư vốn.',
            },
            {
              id: 'B',
              text: 'Huyện đã đầu tư vốn và chú trọng công tác thú y.',
            },
            {
              id: 'C',
              text: 'Huyện đã sử dụng diện tích mặt nước tự nhiên và nhân tạo, đầu tư vốn, chú trọng công tác thú y.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '7',
          question:
            'Tại sao trong thời gian qua, huyện Trảng Bom chú trọng phát triển thêm các ngành công nghiệp (chế biến, cơ khí, may mặc, …)?',
          options: [
            {
              id: 'A',
              text: 'Nhằm khai thác vùng nguyên liệu dồi dào, tạo việc làm và thu nhập cho lao động tại chỗ.',
            },
            { id: 'B', text: 'Nhằm khai thác vùng nguyên liệu dồi dào.' },
            {
              id: 'C',
              text: 'Nhằm tạo việc làm và thu nhập cho lao động tại chỗ.',
            },
          ],
          correctAnswer: 'A',
        },
        {
          id: '8',
          question: 'Kể tên một số khu công nghiệp của huyện Trảng Bom?',
          options: [
            {
              id: 'A',
              text: 'Khu công nghiệp Long Bình, Biên Hòa, A-ma-ta,...',
            },
            {
              id: 'B',
              text: 'Khu công nghiệp Giang Điền, Sông Mây, Hố Nai,...',
            },
            {
              id: 'C',
              text: 'Khu công nghiệp Giang Điền, Biên Hòa, A-ma-ta,...',
            },
          ],
          correctAnswer: 'B',
        },
        {
          id: '9',
          question:
            'Việc hình thành các khu công nghiệp với quy mô và diện tích khá lớn đã giúp huyện Trảng Bom phát triển như thế nào?',
          options: [
            {
              id: 'A',
              text: 'Giải quyết việc làm, chuyển đổi cơ cấu kinh tế hiệu quả.',
            },
            { id: 'B', text: 'Giải quyết việc làm cho nhiều lao động.' },
            { id: 'C', text: 'Tận dụng được nguồn phụ phẩm trong trồng trọt.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Huyện Trảng Bom nằm ở khu vực trung tâm tỉnh Đồng Nai, có lợi thế về ……(1)… và…..(2)…”<br/>Từ thích hợp điền vào các ô trống lần lượt là:',
          options: [
            { id: 'A', text: 'Chăn nuôi gia cầm - thủy sản.' },
            { id: 'B', text: 'Trồng trọt – chăn nuôi.' },
            { id: 'C', text: 'Thương mại - dịch vụ.' },
          ],
          correctAnswer: 'A',
        },
      ],
    },
    {
      name: 'vinhcuu',
      questions: [
        {
          id: '1',
          question: 'Nêu vị trí địa lí của huyện Vĩnh Cửu.',
          options: [
            {
              id: 'A',
              text: 'Huyện Vĩnh Cửu nằm ở phía tây bắc tỉnh Đồng Nai.',
            },
            { id: 'B', text: 'Huyện Vĩnh Cửu nằm ở phía bắc tỉnh Đồng Nai.' },
            { id: 'C', text: 'Huyện Vĩnh Cửu nằm ở phía tây tỉnh Đồng Nai.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '2',
          question:
            'Vĩnh Cửu giáp với thành phố Biên Hòa và huyện Trảng Bom ở phía nào?',
          options: [
            { id: 'A', text: 'Phía đông.' },
            { id: 'B', text: 'Phía nam.' },
            { id: 'C', text: 'Phía tây.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '3',
          question: 'Huyện Vĩnh Cửu không giáp với tỉnh nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Dương.' },
            { id: 'B', text: 'Tỉnh Bình Phước.' },
            { id: 'C', text: 'Tỉnh Bình Thuận.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question: 'Phía tây huyện Vĩnh Cửu giáp với tỉnh nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Dương.' },
            { id: 'B', text: 'Tỉnh Bình Phước.' },
            { id: 'C', text: 'Tỉnh Bình Thuận.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '5',
          question:
            'Diện tích rừng nhiệt đới ẩm cuả huyện Vĩnh Cửu chiếm bao nhiêu phần trăm so với các huyện còn lại của tỉnh Đồng Nai?',
          options: [
            { id: 'A', text: '40%' },
            { id: 'B', text: '50%' },
            { id: 'C', text: '60%' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '6',
          question:
            'Rừng nhiệt đới ẩm điển hình cuả huyện Vĩnh Cửu có vai trò như thế nào đối với môi trường tỉnh Đồng Nai?',
          options: [
            {
              id: 'A',
              text: 'Là môi trường sống của nhiều loài động, thực vật nhiệt đới ẩm; có vai trò phòng hộ và bảo vệ môi trường sinh thái.',
            },
            {
              id: 'B',
              text: 'Góp phần điều hòa khí hậu, bảo vệ nguồn nước và nguồn gen quý hiếm.',
            },
            { id: 'C', text: 'Cả A và B đều đúng.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '7',
          question: 'Đâu là ngành kinh tế quan trọng của huyện Vĩnh Cửu?',
          options: [
            { id: 'A', text: 'Ngành nông nghiệp.' },
            { id: 'B', text: 'Ngành lâm nghiệp.' },
            { id: 'C', text: 'Ngành công nghiệp.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '8',
          question:
            'Giá trị lâm nghiệp của huyện Vĩnh Cửu đứng thứ mấy của tỉnh?',
          options: [
            { id: 'A', text: 'Thứ nhất.' },
            { id: 'B', text: 'Thứ hai (sau huyện Xuân Lộc)' },
            { id: 'C', text: 'Thứ ba (sau huyện Xuân Lộc và Định Quán)' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '9',
          question:
            'Trong lâm nghiệp, đâu là hoạt động chính mang lại thu nhập cho người dân huyện Vĩnh Cửu?',
          options: [
            {
              id: 'A',
              text: 'Trồng rừng mới, khai thác lâm sản và các sản phẩm tre, nứa, mật ong.',
            },
            {
              id: 'B',
              text: 'Trồng cây thảo quả, khai thác lâm sản và các sản phẩm tre, nứa, mật ong.',
            },
            { id: 'C', text: 'Khai thác gỗ và lâm sản.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '10',
          question:
            'Vì sao huyện Vĩnh Cửu được xem là lá phổi xanh của tỉnh Đồng Nai?',
          options: [
            {
              id: 'A',
              text: 'Vì huyện có diện tích rừng nhiệt đới ẩm lớn nhất tỉnh Đồng Nai.',
            },
            {
              id: 'B',
              text: 'Vì rừng tự nhiên ở nơi đây vừa là môi trường sống của nhiều loài động, thực vật nhiệt đới ẩm, vừa góp phần điều hòa khí hậu, nguồn nước trong khu vực.',
            },
            { id: 'C', text: 'Cả A và B đều đúng.' },
          ],
          correctAnswer: 'C',
        },
      ],
    },
    {
      name: 'xuanloc',
      questions: [
        {
          id: '1',
          question:
            'Diện tích của huyện Xuân Lộc là bao nhiêu ki-lô-mét vuông ?',
          options: [
            { id: 'A', text: '72,720 ki-lô-mét vuông' },
            { id: 'B', text: '727,20 ki-lô-mét vuông' },
            { id: 'C', text: '7,2720 ki-lô-mét vuông' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '2',
          question:
            'Huyện Xuân Lộc tiếp giáp tỉnh Bà Rịa – Vũng Tàu ở phía nào?',
          options: [
            { id: 'A', text: 'Phía bắc.' },
            { id: 'B', text: 'Phía nam.' },
            { id: 'C', text: 'Phía đông.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '3',
          question: 'Phía bắc huyện Xuân Lộc tiếp giáp với tỉnh nào?',
          options: [
            { id: 'A', text: 'Tỉnh Bình Dương.' },
            { id: 'B', text: 'Tỉnh Bình Phước.' },
            { id: 'C', text: 'Tỉnh Bình Thuận.' },
          ],
          correctAnswer: 'C',
        },
        {
          id: '4',
          question:
            'Huyện Xuân Lộc là cửa ngõ nối Đồng Nai với ……………. <br/>Từ thích hợp để điền vào chỗ chấm là:',
          options: [
            { id: 'A', text: 'Các tỉnh thuộc duyên hải Nam Trung Bộ.' },
            { id: 'B', text: 'Các tỉnh thuộc đồng bằng sông Cửu Long.' },
            { id: 'C', text: 'Các tỉnh thuộc Tây Nguyên.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '5',
          question:
            'Huyện Xuân Lộc có thế mạnh phát triển ………………… toàn diện.<br/>Từ thích hợp để điền vào chỗ chấm là:',
          options: [
            { id: 'A', text: 'Công nghiệp.' },
            { id: 'B', text: 'Nông nghiệp.' },
            { id: 'C', text: 'Thủ công nghiệp.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '6',
          question:
            'Huyện Xuân Lộc dẫn đầu cả tỉnh về giá trị sản xuất nông nghiệp vào năm nào?',
          options: [
            { id: 'A', text: '2014' },
            { id: 'B', text: '2015' },
            { id: 'C', text: '2016' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '7',
          question:
            'Trong trồng trọt, đâu là loại cây trồng chính của huyện cả về diện tích và sản lượng?',
          options: [
            { id: 'A', text: 'Lúa.' },
            { id: 'B', text: 'Bưởi.' },
            { id: 'C', text: 'Cam.' },
          ],
          correctAnswer: 'A',
        },
        {
          id: '8',
          question:
            'Trong chăn nuôi, huyện Xuân Lộc chú trọng phát triển đàn bò, heo và gia cầm lớn nhằm mục đích gì?',
          options: [
            { id: 'A', text: 'Đáp ứng thị trường tiêu thụ.' },
            {
              id: 'B',
              text: 'Tận dụng phụ phẩm trong nông nghiệp làm thức ăn chăn nuôi và tăng nguồn nguyên liệu cho sản xuất.',
            },
            {
              id: 'C',
              text: 'Đáp ứng thị trường tiêu thụ; tận dụng phụ phẩm trong nông nghiệp làm thức ăn chăn nuôi và tăng nguồn nguyên liệu cho sản xuất.',
            },
          ],
          correctAnswer: 'C',
        },
        {
          id: '9',
          question:
            'Thời gian gần đây, huyện Xuân Lộc ưu tiên phát triển các ngành nào?',
          options: [
            { id: 'A', text: 'Nông nghiệp và lâm nghiệp.' },
            { id: 'B', text: 'Công nghiệp và tiểu thủ công nghiệp.' },
            { id: 'C', text: 'Chăn nuôi gia súc và nuôi trồng thủy sản.' },
          ],
          correctAnswer: 'B',
        },
        {
          id: '10',
          question:
            'Trong thời gian tới, ngành nông nghiệp của huyện phát triển theo định hướng nào?',
          options: [
            {
              id: 'A',
              text: 'Chú trọng phát triển nông nghiệp hàng hóa, nông nghiệp công nghệ cao ứng dụng khoa học kĩ thuật, đáp ứng nhu cầu tiêu dùng cho cả huyện.',
            },
            {
              id: 'B',
              text: 'Chú trọng phát triển nông nghiệp hàng hóa, nông nghiệp công nghệ cao ứng dụng khoa học kĩ thuật, đáp ứng nhu cầu tiêu dùng cho huyện và các vùng lân cận.',
            },
            {
              id: 'C',
              text: 'Chú trọng phát triển nông nghiệp hàng hóa, nông nghiệp công nghệ cao tăng cường ứng dụng khoa học kĩ thuật, vốn, mở rộng thị trường xuất khẩu.',
            },
          ],
          correctAnswer: 'C',
        },
      ],
    },
  ];

  static readonly TEST_TITLE = [
    { code: 'bienhoa', title: 'Thành phố Biên Hòa' },
    { code: 'cammy', title: 'Huyện Cẩm Mỹ' },
    { code: 'dinhquan', title: 'Huyện Định Quán' },
    { code: 'longkhanh', title: 'Thành phố Long Khánh' },
    { code: 'longthanh', title: 'Huyện Long Thành' },
    { code: 'nhontrach', title: 'Huyện Nhơn Trạch' },
    { code: 'tanphu', title: 'Huyện Tân Phú' },
    { code: 'thongnhat', title: 'Huyện Thống Nhất' },
    { code: 'trangbom', title: 'Huyện Trảng Bom' },
    { code: 'vinhcuu', title: 'Huyện Vĩnh Cửu' },
    { code: 'xuanloc', title: 'Huyện Xuân Lộc' },
  ];
}
