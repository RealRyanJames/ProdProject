function isEmptyOption<Typed>(
  isEmpty: boolean | string | Typed,
): boolean | string | Typed {
  return isEmpty == true ? "isEmpty" : "Not Empty";
}

export default isEmptyOption;
