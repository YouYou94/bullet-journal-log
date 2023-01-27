import * as Styled from './SearchStyled';

type SearchProps = {
  searchData: string;
  onChangeSearchInput: any;
  onClickSearchMovie: any;
  onKeyPressSearchInput: any;
};

const SearchPresenter = ({
  searchData,
  onChangeSearchInput,
  onClickSearchMovie,
  onKeyPressSearchInput,
}: SearchProps) => {
  return (
    <Styled.Layout>
      <Styled.TitleBox>
        <Styled.Title>MOVIE PICKER</Styled.Title>
      </Styled.TitleBox>
      <Styled.SearchBox>
        <Styled.SearchInput
          value={searchData}
          onChange={onChangeSearchInput}
          onKeyPress={onKeyPressSearchInput}
          placeholder="검색어를 입력해주세요."
        />
        <Styled.SearchButton onClick={onClickSearchMovie}>
          검색
        </Styled.SearchButton>
      </Styled.SearchBox>
    </Styled.Layout>
  );
};

export default SearchPresenter;
